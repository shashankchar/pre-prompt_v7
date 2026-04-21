// LOCAL DEMO ONLY: Client-side auth for localhost/file usage.
(function attachPromptBankAuth(global) {
  const usersKey = "prompt_bank_users_v1";
  const sessionKey = "prompt_bank_session_v1";
  const postLoginToastKey = "prompt_bank_post_login_toast_v1";

  const demoUsers = [
    {
      id: "demo-student",
      fullName: "Demo Student",
      email: "student@demo.com",
      password: "123456",
      mobile: "",
      role: "user"
    },
    {
      id: "demo-admin",
      fullName: "Demo Admin",
      email: "admin@demo.com",
      password: "admin123",
      mobile: "",
      role: "admin"
    }
  ];

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function basePrefix() {
    const path = String(global.location?.pathname || "").toLowerCase();
    if (path.includes("/login/") || path.includes("/register/")) return "../";
    return "./";
  }

  function appPath(relativePath) {
    return `${basePrefix()}${relativePath}`;
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getUsers() {
    return readJson(usersKey, []);
  }

  function saveUsers(users) {
    writeJson(usersKey, users);
  }

  function seedDemoUsers() {
    const existing = getUsers();
    const byEmail = new Map(existing.map((item) => [normalizeEmail(item.email), item]));
    let changed = false;
    demoUsers.forEach((demo) => {
      if (byEmail.has(normalizeEmail(demo.email))) return;
      existing.push({ ...demo });
      changed = true;
    });
    if (changed) saveUsers(existing);
  }

  function getSessionUser() {
    return readJson(sessionKey, null);
  }

  function setSessionUser(user) {
    const safe = {
      id: String(user.id || ""),
      fullName: String(user.fullName || "User"),
      email: normalizeEmail(user.email),
      role: String(user.role || "user"),
      loginAt: Date.now()
    };
    writeJson(sessionKey, safe);
    return safe;
  }

  function setPostLoginToast(message) {
    localStorage.setItem(postLoginToastKey, String(message || ""));
  }

  function takePostLoginToast() {
    const msg = localStorage.getItem(postLoginToastKey) || "";
    localStorage.removeItem(postLoginToastKey);
    return msg;
  }

  function logout() {
    localStorage.removeItem(sessionKey);
  }

  function registerUser(payload) {
    const fullName = String(payload?.fullName || "").trim();
    const email = normalizeEmail(payload?.email);
    const password = String(payload?.password || "");
    const mobile = String(payload?.mobile || "").trim();

    if (!fullName) throw new Error("Full name is required.");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) throw new Error("Enter a valid email address.");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");

    const users = getUsers();
    if (users.some((item) => normalizeEmail(item.email) === email)) {
      throw new Error("This email is already registered.");
    }

    const user = {
      id: `user-${Date.now()}`,
      fullName,
      email,
      password,
      mobile,
      role: "user",
      createdAt: Date.now()
    };
    users.push(user);
    saveUsers(users);
    return setSessionUser(user);
  }

  function loginUser(emailInput, passwordInput) {
    const email = normalizeEmail(emailInput);
    const password = String(passwordInput || "");
    if (!email || !password) throw new Error("Email and password are required.");

    const user = getUsers().find((item) => normalizeEmail(item.email) === email);
    if (!user || String(user.password) !== password) {
      throw new Error("Invalid email or password.");
    }
    return setSessionUser(user);
  }

  function requireAuth(options = {}) {
    const user = getSessionUser();
    if (!user) {
      const loginUrl = appPath("login/index.html");
      global.location.href = loginUrl;
      return null;
    }
    if (options.adminOnly && String(user.role || "user") !== "admin") {
      return null;
    }
    return user;
  }

  function goToDashboard() {
    global.location.href = appPath("index.html");
  }

  seedDemoUsers();

  global.PromptBankAuth = {
    seedDemoUsers,
    getUsers,
    getSessionUser,
    setSessionUser,
    registerUser,
    loginUser,
    logout,
    requireAuth,
    goToDashboard,
    appPath,
    setPostLoginToast,
    takePostLoginToast
  };
})(window);
