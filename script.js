const fallbackPromptData = [
  {
    id: "one-day-problem-solving",
    title: "One Day Problem Solving Prompt",
    category: "Problem Solving",
    tagline: "Use this prompt to solve urgent challenges with a focused one-day action plan.",
    prompt: `You are my strategic problem-solving assistant. I have exactly one day to solve this issue: [describe issue].

Break your response into five sections:
1. Root cause analysis (clear and short).
2. Fastest high-impact actions for today.
3. Timeline for morning, afternoon, evening.
4. Risks I may face and mitigation for each.
5. A final checklist I can execute in 30-minute blocks.

Keep the advice practical, specific, and measurable.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.28.46 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.28.47 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.28.47 AM (1).jpeg"
    ]
  },
  {
    id: "exam-preparation",
    title: "Exam Preparation Prompt",
    category: "Education",
    tagline: "Use this prompt to convert your syllabus into a practical study roadmap.",
    prompt: `Act as an expert study coach. I am preparing for [exam name] and I have [number of days] days left.

Create a full preparation plan including:
1. A daily study schedule.
2. Topic prioritization based on marks and difficulty.
3. Revision strategy every 3 days.
4. Mock test pattern and analysis method.
5. Last 48-hour final revision approach.

Output should be concise, realistic, and easy to follow.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.16.16 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.16.16 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.16.18 AM.jpeg"
    ]
  },
  {
    id: "short-film-script",
    title: "Short Film Script Prompt",
    category: "Filmmaking",
    tagline: "Use this prompt to create a complete short-film script with scene-level clarity.",
    prompt: `You are a professional screenwriter. Write a short film script (8-12 minutes) based on this theme: [theme].

Include:
1. Logline.
2. Main character profile.
3. 3-act structure (setup, conflict, resolution).
4. Scene-by-scene breakdown with location and mood.
5. Realistic dialogue snippets for key scenes.

Tone should be cinematic and emotionally engaging.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.10.45 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.10.45 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM.jpeg"
    ]
  },
  {
    id: "app-feature-spec",
    title: "App Feature Spec Prompt",
    category: "App Development",
    tagline: "Use this prompt to define one app feature from idea to implementation details.",
    prompt: `Act as a senior product manager. I want to build this app feature: [feature description].

Generate a complete feature specification with:
1. Problem statement and user pain points.
2. User stories and acceptance criteria.
3. Primary flow and edge cases.
4. Data requirements and API suggestions.
5. Success metrics and rollout plan.

Format the response so both developers and designers can execute it.`,
    images: [
      "https://picsum.photos/seed/appA/520/900"
    ]
  },
  {
    id: "seo-blog-outline",
    title: "SEO Blog Outline Prompt",
    category: "Content Writing",
    tagline: "Use this prompt to generate a ranking-focused blog structure with clear section flow.",
    prompt: `You are an expert content strategist. Create an SEO-optimized blog outline for this topic: [topic].

Include:
1. Search intent and target audience.
2. Suggested title options with keyword placement.
3. H1, H2, H3 outline structure.
4. Key points to cover under each heading.
5. A short CTA section at the end.

Make the outline practical, clear, and ready for writing.`,
    images: [
      "https://picsum.photos/seed/writeA/520/900"
    ]
  },
  {
    id: "code-explainer-dry-run",
    title: "Code Explanation Dry Run Prompt",
    category: "Code Learning",
    tagline: "Use this prompt to get clear, step-by-step code understanding with dry run tables.",
    prompt: `You are a patient programming teacher.

The user will paste a piece of code.

Your task is to explain the code in a CLEAR, STEP-BY-STEP, DRY-RUN format.

Follow these strict instructions:

1) First Section - Code Overview
- What this program is trying to do (in simple words)
- Input -> Process -> Output format
- Type of pattern used (loop, recursion, condition, array traversal, etc.)

2) Second Section - Line-by-Line Explanation
- Explain each line briefly
- No long paragraphs
- Use bullet points
- Mention variable purpose clearly

3) Third Section - Dry Run Table
If the code contains loops, conditions, or variable updates:

Create a simple table like:
Step | Line Executed | Variable Values | What Happened
------------------------------------------------------

Show how values change step-by-step.`,
    images: [
      "https://picsum.photos/seed/codeA/520/900"
    ]
  },
  {
    id: "expert-learning-roadmap",
    title: "Expert Learning Roadmap Prompt",
    category: "Learning Mastery",
    tagline: "Use this prompt to generate safe, structured, beginner-friendly mastery roadmaps.",
    prompt: `You are an Expert Learning Strategist and Responsible Mentor.

Create a safe and structured roadmap for the given topic.

Include:
1. What the topic means in simple words.
2. Common misconceptions and ethical boundaries.
3. 4 learning levels: Foundations, Core, Intermediate, Advanced.
4. Practical mini exercises for each level.
5. 30-day starter plan and validation checklist.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.03.23 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM (2).jpeg"
    ]
  },
  {
    id: "cinematic-song-lyrics-generator",
    title: "Cinematic Song Lyrics Prompt",
    category: "Content Writing",
    tagline: "Use this prompt to generate emotionally powerful original lyrics with structured options.",
    prompt: `Create original cinematic song lyrics with strong emotion and natural rhythm.

Structure:
Verse 1
Pre-Chorus
Chorus
Verse 2
Bridge
Final Chorus

Then ask the user to choose mood, theme, tempo, perspective, imagery, and ending.`,
    images: [
      "https://picsum.photos/seed/songA/520/900",
      "https://picsum.photos/seed/songB/520/900"
    ]
  },
  {
    id: "concept-identification-only-1",
    title: "Concept Identification Only",
    category: "Concept Logic",
    tagline: "Use this prompt to identify only the correct concept category without solving the question.",
    prompt: `From the given concept list, identify only the exact concept needed for the question.

Rules:
- Do not solve the question.
- Do not provide steps.
- Only return the correct concept label.`,
    images: [
      "https://picsum.photos/seed/solveA/520/900"
    ]
  },
  {
    id: "deep-structured-topic-mastery",
    title: "Deep Structured Topic Mastery",
    category: "Learning Mastery",
    tagline: "Use this prompt to learn any topic deeply from beginner to advanced in a structured path.",
    prompt: `Teach this topic from absolute beginner to advanced in strict order:

1. What it is
2. Why it matters
3. Real-world usage
4. Foundations
5. Intermediate concepts
6. Advanced concepts
7. Practice tasks per stage
8. One practical project
9. Revision plan and next roadmap`,
    images: [
      "https://picsum.photos/seed/examA/520/900"
    ]
  },
  {
    id: "concept-identification-only-2",
    title: "Concept Identification Only (Variant)",
    category: "Concept Logic",
    tagline: "Use this prompt when you only need concept selection and not full solution steps.",
    prompt: `Identify only the best matching concept from the list.

No solution.
No explanation steps.
Return concept name only.`,
    images: [
      "https://picsum.photos/seed/filmA/520/900"
    ]
  },
  {
    id: "hero-startup-launch-strategy",
    title: "Startup Launch Strategy Prompt",
    category: "Business Growth",
    tagline: "Create a 30-day launch blueprint with channels, milestones, and risk controls.",
    prompt: `Act as a startup growth strategist. Build a 30-day launch plan for my product: [product name].

Include audience, positioning, channel plan, content calendar, budget split, KPI targets, and weekly review actions.`,
    featuredInSlider: true,
    images: [
      "https://source.unsplash.com/1600x900/?startup,team,meeting&sig=101"
    ]
  },
  {
    id: "hero-cinematic-brand-story",
    title: "Cinematic Brand Story Prompt",
    category: "Marketing",
    tagline: "Design a premium brand narrative that feels visual, emotional, and memorable.",
    prompt: `You are a brand filmmaker. Create a cinematic brand story for [brand name].

Output: hook, tone board, 3-act script, visual cues, voice-over lines, and CTA variants for reels and ads.`,
    featuredInSlider: true,
    images: [
      "https://source.unsplash.com/1600x900/?cinematic,neon,city&sig=102"
    ]
  },
  {
    id: "hero-fashion-lookbook-ai",
    title: "Fashion Lookbook Prompt",
    category: "Fashion",
    tagline: "Generate high-conversion lookbook prompts for trend-forward outfit collections.",
    prompt: `Act as a fashion creative director. Build a lookbook plan for [brand/style].

Include 10 look concepts, shot style, lighting mood, styling notes, and social caption prompts.`,
    featuredInSlider: true,
    images: [
      "https://source.unsplash.com/1600x900/?fashion,editorial,model&sig=103"
    ]
  },
  {
    id: "hero-developer-productivity-stack",
    title: "Developer Productivity Prompt",
    category: "Code Learning",
    tagline: "Plan a focused dev workflow for fast shipping and less context switching.",
    prompt: `Act as a senior engineering coach. Build my weekly developer productivity system for [project type].

Include coding blocks, bug triage method, test checklist, review workflow, and anti-burnout rules.`,
    featuredInSlider: true,
    images: [
      "https://source.unsplash.com/1600x900/?coding,developer,workspace&sig=104"
    ]
  },
  {
    id: "hero-ai-agent-design",
    title: "AI Agent Design Prompt",
    category: "AI Systems",
    tagline: "Design practical AI agent architecture with tool-use, memory, and guardrails.",
    prompt: `You are an AI systems architect. Design an agent workflow for [use case].

Include role split, tools, memory strategy, failure handling, safety rules, and evaluation metrics.`,
    featuredInSlider: true,
    images: [
      "https://source.unsplash.com/1600x900/?artificial-intelligence,robot,future&sig=105"
    ]
  }
];

const categoriesEl = document.getElementById("categories");
const categoriesTitleEl = document.getElementById("categoriesTitle");
const quickFiltersEl = document.getElementById("quickFilters");
const heroSectionEl = document.getElementById("heroSection");
const promptGridEl = document.getElementById("promptGrid");
const promptsPanelEl = document.getElementById("promptsPanel");
const detailViewEl = document.getElementById("detailView");
const imagePromptsViewEl = document.getElementById("imagePromptsView");
const adminViewEl = document.getElementById("adminView");
const imagePromptGridEl = document.getElementById("imagePromptGrid");
const imageBackBtn = document.getElementById("imageBackBtn");
const detailTitleEl = document.getElementById("detailTitle");
const detailTaglineEl = document.getElementById("detailTagline");
const detailPromptTextEl = document.getElementById("detailPromptText");
const screenshotsRowEl = document.getElementById("screenshotsRow");
const togglePinBtn = document.getElementById("togglePinBtn");
const toggleFavoriteBtn = document.getElementById("toggleFavoriteBtn");
const copyBtn = document.getElementById("copyBtn");
const detailTestBtn = document.getElementById("detailTestBtn");
const saveToPromptTyperBtn = document.getElementById("saveToPromptTyperBtn");
const backBtn = document.getElementById("backBtn");
const bridgeStatusEl = document.getElementById("bridgeStatus");
const searchForm = document.getElementById("searchForm");
const searchInputEl = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const folderFilterEl = document.getElementById("folderFilter");
const tagFilterEl = document.getElementById("tagFilter");
const heroTrackEl = document.getElementById("heroTrack");
const heroDotsEl = document.getElementById("heroDots");
const heroKickerEl = document.getElementById("heroKicker");
const heroHeadlineEl = document.getElementById("heroHeadline");
const heroDescriptionEl = document.getElementById("heroDescription");
const openAdminBtn = document.getElementById("openAdminBtn");
const heroOpenBtn = document.getElementById("heroOpenBtn");
const heroBrowseBtn = document.getElementById("heroBrowseBtn");
const heroPrevBtn = document.getElementById("heroPrevBtn");
const heroNextBtn = document.getElementById("heroNextBtn");
const userSessionChipEl = document.getElementById("userSessionChip");
const logoutBtnEl = document.getElementById("logoutBtn");
const welcomeBannerEl = document.getElementById("welcomeBanner");
const appToastEl = document.getElementById("appToast");
const closeAdminBtn = document.getElementById("closeAdminBtn");
const adminForm = document.getElementById("adminForm");
const adminPromptIdEl = document.getElementById("adminPromptId");
const adminTitleEl = document.getElementById("adminTitle");
const adminCategoryEl = document.getElementById("adminCategory");
const adminFolderEl = document.getElementById("adminFolder");
const adminTagsEl = document.getElementById("adminTags");
const adminTaglineEl = document.getElementById("adminTagline");
const adminPromptEl = document.getElementById("adminPrompt");
const adminImageEl = document.getElementById("adminImage");
const adminFeaturedEl = document.getElementById("adminFeatured");
const adminImagePreviewWrapEl = document.getElementById("adminImagePreviewWrap");
const adminImagePreviewEl = document.getElementById("adminImagePreview");
const adminResetBtn = document.getElementById("adminResetBtn");
const adminStatusEl = document.getElementById("adminStatus");
const adminListEl = document.getElementById("adminList");
const exportPromptsBtn = document.getElementById("exportPromptsBtn");
const importPromptsBtn = document.getElementById("importPromptsBtn");
const importPromptsFile = document.getElementById("importPromptsFile");
const variablesModalEl = document.getElementById("variablesModal");
const variablesHelpEl = document.getElementById("variablesHelp");
const variablesFormEl = document.getElementById("variablesForm");
const variablesCancelBtn = document.getElementById("variablesCancelBtn");
const variablesSubmitBtn = document.getElementById("variablesSubmitBtn");
const testModalEl = document.getElementById("testModal");
const testModalTitleEl = document.getElementById("testModalTitle");
const testInputEl = document.getElementById("testInput");
const testOutputEl = document.getElementById("testOutput");
const testHintEl = document.getElementById("testHint");
const testRunBtn = document.getElementById("testRunBtn");
const testCloseBtn = document.getElementById("testCloseBtn");
const aiLauncherRowEl = document.getElementById("aiLauncherRow");

const promptTyperBridgeUrl = "http://127.0.0.1:8765";

let promptData = [];
let selectedCategory = "All";
let sliderImagePrompts = [];
let featuredHeroSlides = [];
let currentDetailPrompt = null;
let pendingAdminImageData = "";
let editingExistingImage = "";
let searchQuery = "";
let activeQuickFilter = "all";
let promptMeta = {};
let activeFolderFilter = "";
let activeTagFilter = "";
let selectedPromptIndex = -1;
let pendingVariableSubmission = null;
let pendingPlaygroundPrompt = null;
let renderedPromptIds = [];
let customAiLaunchers = [];
let currentSessionUser = null;

const promptMetaStorageKey = "prompt_bank_meta_v1";
const aiLaunchersStorageKey = "prompt_bank_ai_launchers_v1";
const promptLibraryCacheKey = "prompt_bank_library_cache_v2";
const heroSliderEnabled = true;
const defaultAiLaunchers = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    symbol: "C",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
    urlTemplate: "https://chatgpt.com/?q={{prompt}}",
    homeUrl: "https://chatgpt.com/",
    prefillMode: "url"
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "G",
    iconUrl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
    urlTemplate: "https://gemini.google.com/app",
    homeUrl: "https://gemini.google.com/app",
    prefillMode: "clipboard"
  },
  {
    id: "grok",
    name: "Grok",
    symbol: "X",
    iconUrl: "https://www.google.com/s2/favicons?domain=grok.com&sz=64",
    urlTemplate: "https://grok.com/",
    homeUrl: "https://grok.com/",
    prefillMode: "clipboard"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    symbol: "D",
    iconUrl: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=64",
    urlTemplate: "https://chat.deepseek.com/",
    homeUrl: "https://chat.deepseek.com/",
    prefillMode: "clipboard"
  },
  {
    id: "perchance",
    name: "Perchance",
    symbol: "P",
    iconUrl: "https://www.google.com/s2/favicons?domain=perchance.org&sz=64",
    urlTemplate: "https://perchance.org/ai-text-generator",
    homeUrl: "https://perchance.org/ai-text-generator",
    prefillMode: "clipboard"
  }
];
const netTimeoutMs = 12000;
const maxImageUploadBytes = 8 * 1024 * 1024;

function showToast(message) {
  if (!appToastEl || !message) return;
  appToastEl.textContent = message;
  appToastEl.classList.remove("hidden");
  window.clearTimeout(showToast._timer);
  showToast._timer = window.setTimeout(() => {
    appToastEl.classList.add("hidden");
  }, 2600);
}

function applySessionUi(user) {
  if (!user) return;
  const fullName = String(user.fullName || "User").trim();
  const firstName = fullName.split(/\s+/)[0] || "User";
  if (userSessionChipEl) {
    userSessionChipEl.textContent = `Hi ${firstName}!`;
  }
  if (welcomeBannerEl) {
    welcomeBannerEl.textContent = "Welcome to Prompt Bank - Your Personal Fashion AI Studio";
  }
  if (openAdminBtn) {
    openAdminBtn.classList.toggle("hidden", String(user.role || "user") !== "admin");
  }
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseTagList(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((tag) => String(tag || "").trim()).filter(Boolean))];
  }
  return [...new Set(String(value || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean))];
}

function normalizePrompt(item, index) {
  const title = String(item.title || `Untitled Prompt ${index + 1}`).trim();
  const prompt = String(item.prompt || item.content || "").trim();
  const category = String(item.category || "General").trim() || "General";
  const folder = String(item.folder || category || "General").trim() || "General";
  const tags = parseTagList(item.tags);
  const tagline = String(item.tagline || "").trim();
  const id = String(item.id || slugify(title) || `prompt-${index + 1}`);
  const mainImage = String(item.mainImage || item.heroImage || item.image || item.images?.[0] || "").trim();
  const images = Array.isArray(item.images)
    ? item.images.filter((image) => typeof image === "string" && image.trim())
    : [];
  if (mainImage && !images.includes(mainImage)) {
    images.unshift(mainImage);
  }

  return {
    id,
    title,
    category,
    folder,
    tags,
    tagline,
    prompt,
    images,
    mainImage,
    featuredInSlider: Boolean(item.featuredInSlider ?? item.featured ?? mainImage),
    versions: Array.isArray(item.versions) ? item.versions.slice(0, 5) : [],
    usageCount: Number(item.usageCount || 0),
    lastUsedAt: Number(item.lastUsedAt || 0),
  };
}

function loadPromptMeta() {
  try {
    const raw = localStorage.getItem(promptMetaStorageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      promptMeta = parsed;
    }
  } catch (_error) {
    promptMeta = {};
  }
}

function savePromptMeta() {
  localStorage.setItem(promptMetaStorageKey, JSON.stringify(promptMeta));
}

function loadAiLaunchers() {
  try {
    const raw = localStorage.getItem(aiLaunchersStorageKey);
    if (!raw) {
      customAiLaunchers = [];
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      customAiLaunchers = [];
      return;
    }
    customAiLaunchers = parsed
      .filter((item) => item && typeof item === "object")
      .map((item) => ({
        id: String(item.id || `custom-${Date.now()}`),
        name: String(item.name || "Custom AI").trim() || "Custom AI",
        symbol: String(item.symbol || "").trim(),
        iconUrl: String(item.iconUrl || "").trim(),
        urlTemplate: String(item.urlTemplate || "").trim(),
        homeUrl: String(item.homeUrl || "").trim(),
        prefillMode: String(item.prefillMode || "url").trim() === "clipboard" ? "clipboard" : "url"
      }))
      .filter((item) => /^https?:\/\//i.test(item.urlTemplate));
  } catch (_error) {
    customAiLaunchers = [];
  }
}

function saveAiLaunchers() {
  localStorage.setItem(aiLaunchersStorageKey, JSON.stringify(customAiLaunchers));
}

function providerSymbol(provider) {
  const custom = String(provider.symbol || "").trim();
  if (custom) return custom.slice(0, 2);
  const name = String(provider.name || "").trim();
  return name ? name.slice(0, 1).toUpperCase() : "?";
}

function fallbackFaviconForTemplate(urlTemplate) {
  try {
    const firstPart = String(urlTemplate || "").split("{{prompt}}")[0] || "";
    const parsed = new URL(firstPart);
    return `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=64`;
  } catch (_error) {
    return "";
  }
}

function getAllAiLaunchers() {
  return [...defaultAiLaunchers, ...customAiLaunchers];
}

function buildProviderUrl(urlTemplate, promptText) {
  const encoded = encodeURIComponent(promptText);
  if (urlTemplate.includes("{{prompt}}")) {
    return urlTemplate.replace(/{{prompt}}/g, encoded);
  }
  if (urlTemplate.includes("%s")) {
    return urlTemplate.replace(/%s/g, encoded);
  }
  return urlTemplate + (urlTemplate.includes("?") ? "&q=" : "?q=") + encoded;
}

function providerBaseUrl(provider) {
  if (provider.homeUrl && /^https?:\/\//i.test(provider.homeUrl)) {
    return provider.homeUrl;
  }
  try {
    const parsed = new URL(provider.urlTemplate);
    return `${parsed.origin}${parsed.pathname}`;
  } catch (_error) {
    return provider.urlTemplate;
  }
}

async function copyTextToClipboard(text) {
  if (!text) return false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (_error) {
    // Fallback below.
  }
  try {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(temp);
    return Boolean(ok);
  } catch (_error) {
    return false;
  }
}

function getPlaygroundRenderedPrompt() {
  if (!pendingPlaygroundPrompt) return "";
  const input = testInputEl.value.trim();
  const template = pendingPlaygroundPrompt.prompt || "";
  const vars = parsePromptVariables(template);
  const values = { input, user_input: input, query: input };
  vars.forEach((variable) => {
    if (!values[variable.key]) {
      values[variable.key] = input;
    }
  });
  return applyPromptVariables(template, values, vars);
}

async function openPromptInProvider(provider) {
  const content = (testOutputEl.textContent || "").trim();
  const rendered = content && content !== "Type input and click Run Test."
    ? content
    : getPlaygroundRenderedPrompt();
  if (!rendered) {
    testOutputEl.textContent = "Run test first or type input.";
    return;
  }
  const prefillMode = provider.prefillMode === "clipboard" ? "clipboard" : "url";
  const url = prefillMode === "clipboard"
    ? providerBaseUrl(provider)
    : buildProviderUrl(provider.urlTemplate, rendered);
  const copyPromise = prefillMode === "clipboard"
    ? copyTextToClipboard(rendered)
    : Promise.resolve(false);

  const popup = window.open(url, "_blank", "noopener");
  if (!popup) {
    if (testHintEl) {
      testHintEl.textContent = "Popup blocked. Please allow popups for this site.";
    }
    return;
  }

  const copied = await copyPromise;

  if (testHintEl) {
    if (prefillMode === "clipboard") {
      testHintEl.textContent = copied
        ? `${provider.name} opened. Prompt copied, just paste with Ctrl+V.`
        : `${provider.name} opened. Copy blocked, copy prompt manually from below.`;
    } else {
      testHintEl.textContent = `Opened ${provider.name} with current rendered prompt.`;
    }
  }
}

function promptForNewAiLauncher() {
  const name = window.prompt("AI name (example: Claude, Perplexity):", "");
  if (name === null) return;
  const cleanName = String(name).trim();
  if (!cleanName) return;

  const url = window.prompt(
    "AI URL template. Use {{prompt}} where prompt should be inserted.\nExample: https://example.com/?q={{prompt}}",
    "https://"
  );
  if (url === null) return;
  const cleanUrl = String(url).trim();
  if (!/^https?:\/\//i.test(cleanUrl)) {
    window.alert("Please enter a valid URL starting with http:// or https://");
    return;
  }
  let iconUrl = "";
  try {
    const origin = new URL(cleanUrl).origin;
    iconUrl = `${origin}/favicon.ico`;
  } catch (_error) {
    iconUrl = "";
  }

  customAiLaunchers.push({
    id: `custom-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
    name: cleanName,
    symbol: cleanName.slice(0, 1).toUpperCase(),
    iconUrl,
    urlTemplate: cleanUrl,
    homeUrl: cleanUrl,
    prefillMode: "url"
  });
  saveAiLaunchers();
  renderAiLaunchers();
}

function removeCustomAiLauncher(id) {
  customAiLaunchers = customAiLaunchers.filter((item) => item.id !== id);
  saveAiLaunchers();
  renderAiLaunchers();
}

function renderAiLaunchers() {
  if (!aiLauncherRowEl) return;
  aiLauncherRowEl.innerHTML = "";
  getAllAiLaunchers().forEach((provider) => {
    const wrap = document.createElement("div");
    wrap.className = "launcher-chip";

    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.className = "action-btn action-btn-secondary launcher-open-btn";
    const icon = document.createElement("img");
    icon.className = "launcher-icon";
    icon.alt = "";
    const primaryIcon = provider.iconUrl || fallbackFaviconForTemplate(provider.urlTemplate);
    const secondaryIcon = fallbackFaviconForTemplate(provider.urlTemplate);
    icon.src = primaryIcon || "";
    icon.loading = "lazy";
    icon.referrerPolicy = "no-referrer";

    const fallback = document.createElement("span");
    fallback.className = "launcher-fallback";
    fallback.textContent = providerSymbol(provider);
    fallback.hidden = Boolean(provider.iconUrl);

    if (provider.iconUrl) {
      icon.addEventListener("error", () => {
        if (secondaryIcon && icon.src !== secondaryIcon) {
          icon.src = secondaryIcon;
          return;
        }
        icon.hidden = true;
        fallback.hidden = false;
      });
      icon.addEventListener("load", () => {
        icon.hidden = false;
        fallback.hidden = true;
      });
    } else {
      icon.hidden = true;
    }

    openBtn.appendChild(icon);
    openBtn.appendChild(fallback);
    openBtn.setAttribute("data-launcher-open", provider.id);
    openBtn.setAttribute("title", provider.name);
    openBtn.setAttribute("aria-label", provider.name);
    wrap.appendChild(openBtn);

    if (provider.id.startsWith("custom-")) {
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "launcher-remove-btn";
      removeBtn.textContent = "x";
      removeBtn.setAttribute("data-launcher-remove", provider.id);
      removeBtn.setAttribute("aria-label", `Remove ${provider.name}`);
      wrap.appendChild(removeBtn);
    }

    aiLauncherRowEl.appendChild(wrap);
  });

  const newBtn = document.createElement("button");
  newBtn.type = "button";
  newBtn.className = "action-btn launcher-new-btn";
  newBtn.textContent = "+";
  newBtn.setAttribute("title", "Add new AI");
  newBtn.setAttribute("aria-label", "Add new AI");
  newBtn.setAttribute("data-launcher-new", "1");
  aiLauncherRowEl.appendChild(newBtn);
}

function getPromptMeta(id) {
  if (!promptMeta[id]) {
    promptMeta[id] = { pinned: false, favorite: false, lastOpenedAt: 0 };
  }
  return promptMeta[id];
}

function getCategories() {
  return [...new Set(promptData.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function getFolders() {
  return [...new Set(promptData.map((item) => item.folder || item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function getTags() {
  return [...new Set(promptData.flatMap((item) => item.tags || []).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function getDisplayImages(item) {
  if (item.images.length) {
    return item.images;
  }
  return item.mainImage ? [item.mainImage] : [];
}

function getFeaturedPrompts() {
  return promptData.filter((item) => item.mainImage && item.featuredInSlider);
}

function renderCategories() {
  categoriesEl.innerHTML = "";
  ["All", ...getCategories()].forEach((label) => {
    const button = document.createElement("button");
    button.className = "category-btn" + (selectedCategory === label ? " active" : "");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      selectedCategory = label;
      renderCategories();
      renderPromptList();
      showListView();
    });
    categoriesEl.appendChild(button);
  });
}

function renderPromptList() {
  promptGridEl.innerHTML = "";
  const fashionMode = String(selectedCategory || "").trim().toLowerCase() === "fashion";
  promptGridEl.classList.toggle("fashion-grid", fashionMode);
  const loweredQuery = searchQuery.trim().toLowerCase();
  let visiblePrompts = promptData.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    if (!categoryMatch) return false;
    const folderMatch = !activeFolderFilter || (item.folder || item.category) === activeFolderFilter;
    if (!folderMatch) return false;
    const tagMatch = !activeTagFilter || (item.tags || []).includes(activeTagFilter);
    if (!tagMatch) return false;
    if (!loweredQuery) return true;

    const haystack = [
      item.title,
      item.folder,
      (item.tags || []).join(" "),
      item.category,
      item.tagline,
      item.prompt
    ].join(" ").toLowerCase();
    return haystack.includes(loweredQuery);
  });

  if (activeQuickFilter === "pinned") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).pinned);
  } else if (activeQuickFilter === "favorites") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).favorite);
  } else if (activeQuickFilter === "recent") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).lastOpenedAt > 0);
  }

  visiblePrompts = [...visiblePrompts].sort((a, b) => {
    const aMeta = getPromptMeta(a.id);
    const bMeta = getPromptMeta(b.id);
    if (activeQuickFilter === "recent") {
      return bMeta.lastOpenedAt - aMeta.lastOpenedAt;
    }
    if (aMeta.pinned !== bMeta.pinned) return aMeta.pinned ? -1 : 1;
    if (aMeta.favorite !== bMeta.favorite) return aMeta.favorite ? -1 : 1;
    return a.title.localeCompare(b.title);
  });
  renderedPromptIds = visiblePrompts.map((item) => item.id);

  selectedPromptIndex = visiblePrompts.length ? Math.min(selectedPromptIndex, visiblePrompts.length - 1) : -1;
  if (selectedPromptIndex < 0 && visiblePrompts.length) {
    selectedPromptIndex = 0;
  }

  visiblePrompts.forEach((item, index) => {
    if (fashionMode) {
      const card = document.createElement("article");
      card.className = "prompt-card fashion-card";
      card.setAttribute("data-prompt-index", String(index));
      card.classList.toggle("is-selected", selectedPromptIndex === index);

      const image = document.createElement("img");
      image.className = "fashion-card-image";
      image.src = getDisplayImages(item)[0] || createFallbackPoster(item.category, item.title);
      image.alt = `${item.title} look`;

      const body = document.createElement("div");
      body.className = "fashion-card-body";

      const top = document.createElement("div");
      top.className = "fashion-card-top";

      const titleNode = document.createElement("h4");
      titleNode.textContent = item.title;
      const star = document.createElement("span");
      star.className = "prompt-card-star";
      star.textContent = getPromptMeta(item.id).favorite ? "★" : "☆";
      top.appendChild(titleNode);
      top.appendChild(star);

      const subtitle = document.createElement("p");
      subtitle.className = "fashion-card-subtitle";
      subtitle.textContent = item.tagline || "Tap and try this fashion prompt.";

      const actions = document.createElement("div");
      actions.className = "prompt-card-actions";

      const openBtn = document.createElement("button");
      openBtn.type = "button";
      openBtn.className = "action-btn action-btn-secondary";
      openBtn.textContent = "View Details";
      openBtn.addEventListener("click", () => showPromptDetails(item.id));

      const tryBtn = document.createElement("button");
      tryBtn.type = "button";
      tryBtn.className = "action-btn";
      tryBtn.textContent = "Try Look Prompt";
      tryBtn.addEventListener("click", () => handlePromptSend(item.title, item.prompt));

      const testBtn = document.createElement("button");
      testBtn.type = "button";
      testBtn.className = "action-btn action-btn-secondary";
      testBtn.textContent = "Test Prompt";
      testBtn.addEventListener("click", () => openTestModal(item));

      actions.appendChild(openBtn);
      actions.appendChild(tryBtn);
      actions.appendChild(testBtn);

      body.appendChild(top);
      body.appendChild(subtitle);
      body.appendChild(actions);
      card.appendChild(image);
      card.appendChild(body);
      promptGridEl.appendChild(card);
      return;
    }

    const card = document.createElement("article");
    card.className = "prompt-card";
    card.setAttribute("data-prompt-index", String(index));
    card.classList.toggle("is-selected", selectedPromptIndex === index);
    const meta = getPromptMeta(item.id);
    const markers = [];
    if (meta.pinned) markers.push("PINNED");
    if (meta.favorite) markers.push("STARRED");
    if (item.folder) markers.push(`FOLDER: ${item.folder}`);
    if (item.tags?.length) markers.push(`TAGS: ${item.tags.join(", ")}`);
    markers.push(`USED: ${item.usageCount || 0}`);
    if (item.lastUsedAt) {
      markers.push(`LAST USED: ${new Date(item.lastUsedAt).toLocaleString()}`);
    }

    const titleRow = document.createElement("div");
    titleRow.className = "prompt-card-title-row";
    const titleNode = document.createElement("h4");
    titleNode.textContent = item.title;
    const star = document.createElement("span");
    star.className = "prompt-card-star";
    star.textContent = meta.favorite ? "★" : "☆";
    titleRow.appendChild(titleNode);
    titleRow.appendChild(star);
    card.appendChild(titleRow);

    if (item.tagline) {
      const tagline = document.createElement("p");
      tagline.className = "prompt-card-tagline";
      tagline.textContent = item.tagline;
      card.appendChild(tagline);
    }

    if (markers.length) {
      const metaNode = document.createElement("span");
      metaNode.className = "card-meta";
      metaNode.textContent = markers.join(" | ");
      card.appendChild(metaNode);
    }

    const actions = document.createElement("div");
    actions.className = "prompt-card-actions";
    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.className = "action-btn action-btn-secondary";
    openBtn.textContent = "Open";
    openBtn.addEventListener("click", () => showPromptDetails(item.id));

    const testBtn = document.createElement("button");
    testBtn.type = "button";
    testBtn.className = "action-btn action-btn-secondary";
    testBtn.textContent = "Test Prompt";
    testBtn.addEventListener("click", () => openTestModal(item));

    const sendBtn = document.createElement("button");
    sendBtn.type = "button";
    sendBtn.className = "action-btn";
    sendBtn.textContent = "Send";
    sendBtn.addEventListener("click", () => handlePromptSend(item.title, item.prompt));

    actions.appendChild(openBtn);
    actions.appendChild(testBtn);
    actions.appendChild(sendBtn);
    card.appendChild(actions);

    promptGridEl.appendChild(card);
  });

  if (!visiblePrompts.length) {
    const empty = document.createElement("div");
    empty.className = "prompt-card";
    empty.textContent = "No prompts matched your search.";
    promptGridEl.appendChild(empty);
  }
}

function showPromptDetails(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;

  currentDetailPrompt = item;
  const itemMeta = getPromptMeta(item.id);
  itemMeta.lastOpenedAt = Date.now();
  savePromptMeta();
  detailTitleEl.textContent = item.title;
  detailTaglineEl.textContent = item.tagline || item.category;
  detailPromptTextEl.textContent = item.prompt;
  togglePinBtn.textContent = itemMeta.pinned ? "Unpin" : "Pin";
  toggleFavoriteBtn.textContent = itemMeta.favorite ? "★ Unstar" : "☆ Star";

  screenshotsRowEl.innerHTML = "";
  getDisplayImages(item).slice(0, 5).forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${item.title} sample screenshot ${index + 1}`;
    screenshotsRowEl.appendChild(img);
  });

  copyBtn.setAttribute("data-copy-text", item.prompt);
  saveToPromptTyperBtn.setAttribute("data-prompt-title", item.title);
  saveToPromptTyperBtn.setAttribute("data-prompt-content", item.prompt);
  showDetailView();
}

function showDetailView() {
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");
}

function showListView() {
  if (heroSliderEnabled) {
    heroSectionEl.classList.remove("hidden");
  } else {
    heroSectionEl.classList.add("hidden");
  }
  categoriesTitleEl.classList.remove("hidden");
  categoriesEl.classList.remove("hidden");
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  promptsPanelEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");
  if (window.location.hash === "#admin") {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function showImagePromptView(imageKey) {
  heroSectionEl.classList.add("hidden");
  categoriesTitleEl.classList.add("hidden");
  categoriesEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  imagePromptsViewEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");

  if (imageKey) {
    const card = imagePromptGridEl.querySelector(`[data-image-key="${imageKey}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function showAdminView() {
  if (!currentSessionUser || String(currentSessionUser.role || "user") !== "admin") {
    showToast("Admin access only.");
    return;
  }
  heroSectionEl.classList.add("hidden");
  categoriesTitleEl.classList.add("hidden");
  categoriesEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.remove("hidden");
  closeAdminBtn.classList.remove("hidden");
  window.location.hash = "admin";
}

function updateSearchUi() {
  searchClearBtn.classList.toggle("hidden", !searchQuery.trim());
}

const categoryShowcaseMeta = {
  "app development": {
    outcome: "From idea to build-ready feature spec",
    chips: ["Flow", "APIs", "Acceptance"]
  },
  "education": {
    outcome: "Study faster with structured plans",
    chips: ["Roadmap", "Revision", "Mock"]
  },
  "learning mastery": {
    outcome: "Beginner-to-advanced path clarity",
    chips: ["Levels", "Practice", "Checklist"]
  },
  "code learning": {
    outcome: "Understand code with guided dry runs",
    chips: ["Trace", "Explain", "Debug"]
  },
  "content writing": {
    outcome: "Generate publish-ready writing structure",
    chips: ["SEO", "Hooks", "CTA"]
  },
  "filmmaking": {
    outcome: "Build cinematic script structure quickly",
    chips: ["Acts", "Scenes", "Dialogue"]
  },
  "fashion": {
    outcome: "Style prompt ideas with visual impact",
    chips: ["Look", "Mood", "Outfit"]
  }
};

function getCategoryMeta(category, fallbackText = "") {
  const key = String(category || "").trim().toLowerCase();
  const preset = categoryShowcaseMeta[key];
  if (preset) return preset;
  return {
    outcome: fallbackText || "Category-ready prompt collection",
    chips: ["Template", "Practical", "Ready"]
  };
}

function createFallbackPoster(category, title) {
  const safeCategory = String(category || "General").slice(0, 28);
  const safeTitle = String(title || "Prompt Showcase").slice(0, 56);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1920'>
    <defs>
      <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#130b1f'/>
        <stop offset='45%' stop-color='#2f0c12'/>
        <stop offset='100%' stop-color='#090a0f'/>
      </linearGradient>
      <linearGradient id='line' x1='0' y1='0' x2='1' y2='0'>
        <stop offset='0%' stop-color='#ff7a00'/>
        <stop offset='100%' stop-color='#e50914'/>
      </linearGradient>
    </defs>
    <rect width='1080' height='1920' fill='url(#bg)'/>
    <circle cx='820' cy='320' r='280' fill='rgba(229,9,20,0.22)'/>
    <circle cx='260' cy='1460' r='240' fill='rgba(255,123,0,0.16)'/>
    <rect x='110' y='130' width='860' height='8' rx='4' fill='url(#line)'/>
    <text x='110' y='280' fill='#ffd3a6' font-size='44' font-family='Segoe UI, Arial, sans-serif' letter-spacing='7'>${safeCategory.toUpperCase()}</text>
    <text x='110' y='390' fill='#f2f2f2' font-size='86' font-family='Segoe UI, Arial, sans-serif' font-weight='700'>PROMPT</text>
    <text x='110' y='485' fill='#f2f2f2' font-size='86' font-family='Segoe UI, Arial, sans-serif' font-weight='700'>SHOWCASE</text>
    <text x='110' y='620' fill='rgba(255,255,255,0.88)' font-size='40' font-family='Segoe UI, Arial, sans-serif'>${safeTitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function pickHeroSlidesByCategory() {
  return getFeaturedPrompts()
    .slice(0, 5)
    .map((item) => {
      const meta = getCategoryMeta(item.category, item.tagline || "");
      const coverSrc = item.mainImage || createFallbackPoster(item.category, item.title);
      return {
        key: item.id,
        src: coverSrc,
        alt: `${item.category} showcase`,
        kicker: item.category,
        title: item.title,
        description: item.tagline || meta.outcome,
        chips: meta.chips,
        prompt: item.prompt,
      };
    });
}

function ensureHeroSeedPrompts() {
  const seedPrompts = fallbackPromptData
    .filter((item) => item.featuredInSlider && item.images?.length)
    .slice(-5);
  const byId = new Map(promptData.map((item) => [item.id, item]));
  let changed = false;

  seedPrompts.forEach((seed) => {
    const existing = byId.get(seed.id);
    if (existing) {
      if (!existing.mainImage || !existing.featuredInSlider) {
        existing.mainImage = seed.images[0];
        existing.images = existing.images?.length ? existing.images : [seed.images[0]];
        existing.featuredInSlider = true;
        changed = true;
      }
      return;
    }
    promptData.unshift(normalizePrompt(seed, promptData.length));
    changed = true;
  });

  return changed;
}

function renderImagePromptCards() {
  imagePromptGridEl.innerHTML = "";
  sliderImagePrompts.forEach((item) => {
    const card = document.createElement("div");
    card.className = "orange-box image-prompt-card";
    card.setAttribute("data-image-key", item.key);

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    const text = document.createElement("p");
    text.className = "image-prompt-text";
    text.textContent = item.promptPreview;

    const copyButton = document.createElement("button");
    copyButton.className = "action-btn";
    copyButton.type = "button";
    copyButton.textContent = "Copy Prompt";
    copyButton.setAttribute("data-copy-image-prompt", item.prompt);

    const saveButton = document.createElement("button");
    saveButton.className = "action-btn action-btn-secondary";
    saveButton.type = "button";
    saveButton.textContent = "Save to PromptTyper";
    saveButton.setAttribute("data-save-title", item.title);
    saveButton.setAttribute("data-save-content", item.prompt);

    const testButton = document.createElement("button");
    testButton.className = "action-btn action-btn-secondary";
    testButton.type = "button";
    testButton.textContent = "Test Prompt";
    testButton.setAttribute("data-test-title", item.title);
    testButton.setAttribute("data-test-content", item.prompt);

    card.appendChild(img);
    card.appendChild(text);
    card.appendChild(copyButton);
    card.appendChild(saveButton);
    card.appendChild(testButton);
    imagePromptGridEl.appendChild(card);
  });
}

function renderAdminList() {
  adminListEl.innerHTML = "";
  promptData.forEach((item) => {
    const article = document.createElement("article");
    article.className = "admin-item";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const info = document.createElement("p");
    info.textContent = item.tagline || item.category || "No tagline";

    const meta = document.createElement("div");
    meta.className = "admin-item-meta";
    meta.textContent = item.mainImage
      ? item.featuredInSlider ? "Image attached | Slider enabled" : "Image attached | List only"
      : "No image | List only";

    const actions = document.createElement("div");
    actions.className = "admin-item-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn action-btn-secondary";
    editBtn.type = "button";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => loadPromptIntoAdmin(item.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn action-btn-secondary";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deletePrompt(item.id));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    article.appendChild(title);
    article.appendChild(info);
    article.appendChild(meta);
    article.appendChild(actions);
    adminListEl.appendChild(article);
  });
}

function renderAll() {
  renderCategories();
  renderQuickFilters();
  renderOrganizationFilters();
  renderPromptList();
  renderAdminList();
  setupHeroSlider();
}

function renderQuickFilters() {
  if (!quickFiltersEl) return;
  const buttons = quickFiltersEl.querySelectorAll("button[data-quick-filter]");
  buttons.forEach((button) => {
    const isActive = button.getAttribute("data-quick-filter") === activeQuickFilter;
    button.classList.toggle("active", isActive);
  });
}

function renderOrganizationFilters() {
  if (!folderFilterEl || !tagFilterEl) return;
  const folders = getFolders();
  const tags = getTags();

  folderFilterEl.innerHTML = `<option value="">All folders</option>${folders
    .map((folder) => `<option value="${folder}">${folder}</option>`).join("")}`;
  tagFilterEl.innerHTML = `<option value="">All tags</option>${tags
    .map((tag) => `<option value="${tag}">${tag}</option>`).join("")}`;

  folderFilterEl.value = activeFolderFilter;
  tagFilterEl.value = activeTagFilter;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = netTimeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function checkPromptTyperBridge() {
  try {
    const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/health`);
    if (!response.ok) {
      throw new Error("offline");
    }
    bridgeStatusEl.textContent = "PromptTyper connection: active";
    bridgeStatusEl.classList.add("is-online");
    return true;
  } catch (_error) {
    bridgeStatusEl.textContent = "PromptTyper connection: app not running";
    bridgeStatusEl.classList.remove("is-online");
    return false;
  }
}

async function loadPromptLibrary() {
  try {
    const cachedRaw = localStorage.getItem(promptLibraryCacheKey);
    const cached = cachedRaw ? JSON.parse(cachedRaw) : null;
    if (Array.isArray(cached) && cached.length) {
      promptData = cached.map(normalizePrompt);
      return;
    }
  } catch (_cacheError) {
    // continue to bridge/fallback load path
  }

  try {
    const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/prompt-bank-data`);
    if (!response.ok) {
      throw new Error("No saved prompt bank data");
    }
    const payload = await response.json();
    if (!payload.ok || !Array.isArray(payload.prompts)) {
      throw new Error("Invalid prompt bank payload");
    }
    promptData = payload.prompts.map(normalizePrompt);
    localStorage.setItem(promptLibraryCacheKey, JSON.stringify(promptData));
  } catch (_error) {
    promptData = fallbackPromptData.map(normalizePrompt);
    localStorage.setItem(promptLibraryCacheKey, JSON.stringify(promptData));
  }
}

function restoreMissingFallbackPrompts() {
  const existing = new Set(promptData.map((item) => item.id));
  let added = 0;

  fallbackPromptData.forEach((rawItem) => {
    if (existing.has(rawItem.id)) return;
    const normalized = normalizePrompt(rawItem, promptData.length + added);
    promptData.push(normalized);
    existing.add(normalized.id);
    added += 1;
  });

  return added;
}

async function savePromptLibrary() {
  const requestBody = JSON.stringify({ prompts: promptData });
  let bridgeSaved = false;
  let bridgeError = "";
  let localSaved = false;

  try {
    const response = await fetchWithTimeout(
      `${promptTyperBridgeUrl}/prompt-bank-data`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody
      },
      30000
    );

    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.ok === false) {
      throw new Error(payload.error || "Could not save Prompt Bank");
    }
    bridgeSaved = true;
  } catch (error) {
    bridgeError = String(error?.message || "Could not reach PromptTyper bridge");
  }

  try {
    localStorage.setItem(promptLibraryCacheKey, JSON.stringify(promptData));
    localSaved = true;
  } catch (_cacheError) {
    if (!bridgeSaved) {
      throw new Error(`${bridgeError || "Save failed"} (local backup also failed: storage full)`);
    }
  }

  if (!bridgeSaved && !localSaved) {
    throw new Error(bridgeError || "Could not save Prompt Bank");
  }

  return { bridgeSaved, localSaved };
}

async function sendPromptToPromptTyper(title, content, source) {
  const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/import-prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, source })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || "PromptTyper import failed");
  }
}

function parsePromptVariables(template) {
  const found = [];
  const seen = new Set();
  const doubleBraces = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
  const labeled = /{([a-zA-Z0-9_]+):([^}]+)}/g;
  const bracketed = /\[([^\]]+)\]/g;
  let match;

  while ((match = doubleBraces.exec(template)) !== null) {
    const key = match[1];
    if (seen.has(key)) continue;
    seen.add(key);
    found.push({ key, label: key, token: match[0], type: "double" });
  }

  while ((match = labeled.exec(template)) !== null) {
    const key = match[1];
    const label = String(match[2] || key).trim();
    if (seen.has(key)) continue;
    seen.add(key);
    found.push({ key, label, token: match[0], type: "labeled" });
  }

  while ((match = bracketed.exec(template)) !== null) {
    const label = String(match[1] || "").trim();
    if (!label) continue;
    const baseKey = slugify(label).replace(/-/g, "_") || `var_${found.length + 1}`;
    let key = baseKey;
    let suffix = 2;
    while (seen.has(key)) {
      key = `${baseKey}_${suffix}`;
      suffix += 1;
    }
    seen.add(key);
    found.push({ key, label, token: match[0], type: "bracket" });
  }

  return found;
}

function applyPromptVariables(template, values, vars = []) {
  let output = String(template || "");
  Object.entries(values).forEach(([key, value]) => {
    const safeValue = String(value ?? "");
    const reDouble = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    const reLabeled = new RegExp(`{${key}:[^}]+}`, "g");
    output = output.replace(reDouble, safeValue).replace(reLabeled, safeValue);
  });
  vars.forEach((variable) => {
    if (variable.type !== "bracket") return;
    const replacement = String(values[variable.key] ?? "");
    output = output.split(variable.token).join(replacement);
  });
  return output;
}

function closeVariablesModal() {
  pendingVariableSubmission = null;
  variablesFormEl.innerHTML = "";
  variablesModalEl.classList.add("hidden");
}

function openVariablesModal(title, template, onSubmit) {
  const vars = parsePromptVariables(template);
  if (!vars.length) {
    onSubmit(template);
    return;
  }

  pendingVariableSubmission = { title, template, onSubmit, vars };
  variablesHelpEl.textContent = `Template "${title}" has ${vars.length} variable(s). Fill and continue.`;
  variablesFormEl.innerHTML = "";
  vars.forEach((variable) => {
    const wrap = document.createElement("label");
    wrap.className = "modal-field";
    const label = document.createElement("span");
    label.textContent = variable.label;
    const input = document.createElement("input");
    input.type = "text";
    input.className = "admin-input";
    input.setAttribute("data-variable-key", variable.key);
    input.placeholder = `Enter ${variable.label}`;
    wrap.appendChild(label);
    wrap.appendChild(input);
    variablesFormEl.appendChild(wrap);
  });
  variablesModalEl.classList.remove("hidden");
  const first = variablesFormEl.querySelector("input[data-variable-key]");
  if (first) first.focus();
}

async function handlePromptSend(title, template, source = "Prompt Bank", button = null) {
  const oldText = button?.textContent || saveToPromptTyperBtn.textContent;
  if (button) button.textContent = "Opening...";
  else saveToPromptTyperBtn.textContent = "Opening...";

  openVariablesModal(title, template, async (filledPrompt) => {
    try {
      await sendPromptToPromptTyper(title, filledPrompt, source);
      if (button) button.textContent = "Opened in PromptTyper";
      else saveToPromptTyperBtn.textContent = "Opened in PromptTyper";
      const prompt = promptData.find((entry) => entry.title === title && entry.prompt === template);
      if (prompt) {
        prompt.usageCount = Number(prompt.usageCount || 0) + 1;
        prompt.lastUsedAt = Date.now();
        await savePromptLibrary().catch(() => {});
        renderPromptList();
      }
    } catch (_error) {
      if (button) button.textContent = "PromptTyper Offline";
      else saveToPromptTyperBtn.textContent = "PromptTyper Offline";
    } finally {
      await checkPromptTyperBridge();
      setTimeout(() => {
        if (button) button.textContent = oldText;
        else saveToPromptTyperBtn.textContent = oldText;
      }, 1600);
    }
  });
}

function openTestModal(promptItem) {
  pendingPlaygroundPrompt = promptItem;
  testModalTitleEl.textContent = `Test Prompt: ${promptItem.title}`;
  testInputEl.value = "";
  testOutputEl.textContent = "Type input and click Run Test.";
  if (testHintEl) {
    testHintEl.textContent = "Tip: click any AI button to open with current rendered prompt.";
  }
  renderAiLaunchers();
  testModalEl.classList.remove("hidden");
  testInputEl.focus();
}

function loadPromptIntoAdmin(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;

  adminPromptIdEl.value = item.id;
  adminTitleEl.value = item.title;
  adminCategoryEl.value = item.category;
  adminFolderEl.value = item.folder || item.category || "";
  adminTagsEl.value = (item.tags || []).join(", ");
  adminTaglineEl.value = item.tagline;
  adminPromptEl.value = item.prompt;
  adminFeaturedEl.checked = Boolean(item.mainImage && item.featuredInSlider);
  adminImageEl.value = "";
  pendingAdminImageData = "";
  editingExistingImage = item.mainImage || "";
  updateAdminPreview(item.mainImage || "");
  adminStatusEl.textContent = `Editing "${item.title}"`;
  showAdminView();
}

function resetAdminForm() {
  adminForm.reset();
  adminPromptIdEl.value = "";
  pendingAdminImageData = "";
  editingExistingImage = "";
  adminFeaturedEl.checked = false;
  adminFolderEl.value = "";
  adminTagsEl.value = "";
  adminStatusEl.textContent = "";
  updateAdminPreview("");
}

function updateAdminPreview(src) {
  if (!src) {
    adminImagePreviewWrapEl.classList.add("hidden");
    adminImagePreviewEl.removeAttribute("src");
    return;
  }
  adminImagePreviewWrapEl.classList.remove("hidden");
  adminImagePreviewEl.src = src;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

async function deletePrompt(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;
  if (!window.confirm(`Delete "${item.title}"?`)) return;

  promptData = promptData.filter((entry) => entry.id !== promptId);
  delete promptMeta[promptId];
  savePromptMeta();
  try {
    await savePromptLibrary();
    renderAll();
    resetAdminForm();
    adminStatusEl.textContent = "Prompt deleted.";
  } catch (error) {
    adminStatusEl.textContent = error.message;
  }
}

function setupHeroSlider() {
  if (!heroSliderEnabled) {
    featuredHeroSlides = [];
    sliderImagePrompts = [];
    renderImagePromptCards();
    heroSectionEl.classList.add("hidden");
    return;
  }

  featuredHeroSlides = pickHeroSlidesByCategory();

  sliderImagePrompts = featuredHeroSlides.map((slide) => ({
    key: slide.key,
    src: slide.src,
    alt: slide.alt,
    title: slide.title,
    prompt: slide.prompt,
    promptPreview: slide.prompt.replace(/\s+/g, " ").trim()
  }));
  renderImagePromptCards();

  heroTrackEl.innerHTML = "";
  heroDotsEl.innerHTML = "";

  if (!featuredHeroSlides.length) {
    heroKickerEl.textContent = "Prompt Library";
    heroHeadlineEl.textContent = "Add an image in Admin to show a prompt in the top slider";
    heroDescriptionEl.textContent = "Text-only prompts still appear in the main list below.";
    return;
  }

  const slidesWithClones = [
    featuredHeroSlides[featuredHeroSlides.length - 1],
    ...featuredHeroSlides,
    featuredHeroSlides[0]
  ];

  slidesWithClones.forEach((slide, index) => {
    const article = document.createElement("article");
    article.className = "hero-slide";
    article.tabIndex = 0;
    article.setAttribute("data-image-key", slide.key);
    article.setAttribute("data-slide-index", String(index));

    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = slide.alt;

    const content = document.createElement("div");
    content.className = "hero-slide-content";

    const kicker = document.createElement("p");
    kicker.className = "hero-slide-tag";
    kicker.textContent = slide.kicker;

    const title = document.createElement("h3");
    title.className = "hero-slide-title";
    title.textContent = slide.title;

    const text = document.createElement("p");
    text.className = "hero-slide-text";
    text.textContent = slide.description;

    const chipRow = document.createElement("div");
    chipRow.className = "hero-slide-chips";
    (slide.chips || []).forEach((chipText) => {
      const chip = document.createElement("span");
      chip.className = "hero-slide-chip";
      chip.textContent = chipText;
      chipRow.appendChild(chip);
    });

    content.appendChild(kicker);
    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(chipRow);
    article.appendChild(img);
    article.appendChild(content);
    heroTrackEl.appendChild(article);
  });

  featuredHeroSlides.forEach((_slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.addEventListener("click", () => goToSlide(index + 1));
    heroDotsEl.appendChild(dot);
  });

  const slides = Array.from(heroTrackEl.children);
  const dots = Array.from(heroDotsEl.children);
  const slideDuration = 620;
  const autoDelay = 3800;
  let currentIndex = 1;
  let autoTimer = null;

  function getSlideStep() {
    const activeSlide = slides[currentIndex];
    if (!activeSlide) return 0;
    const gap = parseFloat(window.getComputedStyle(heroTrackEl).gap) || 0;
    return activeSlide.offsetWidth + gap;
  }

  function syncActiveVisuals() {
    const realIndex = (currentIndex - 1 + featuredHeroSlides.length) % featuredHeroSlides.length;
    const active = featuredHeroSlides[realIndex];
    if (!active) return;

    slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === currentIndex));
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === realIndex));
    heroKickerEl.textContent = active.kicker;
    heroHeadlineEl.textContent = active.title;
    heroDescriptionEl.textContent = active.description;
    heroOpenBtn.setAttribute("data-image-key", active.key);
  }

  function applyTransform(animate = true) {
    const step = getSlideStep();
    if (!step) return;
    const viewport = heroTrackEl.parentElement;
    const viewportWidth = viewport.clientWidth;
    const activeSlide = slides[currentIndex];
    const slideWidth = activeSlide.offsetWidth;
    const offset = (viewportWidth - slideWidth) / 2;
    heroTrackEl.style.transition = animate ? `transform ${slideDuration}ms ease` : "none";
    heroTrackEl.style.transform = `translateX(${offset - currentIndex * step}px)`;
    syncActiveVisuals();
  }

  function scheduleAuto() {
    window.clearTimeout(autoTimer);
    autoTimer = window.setTimeout(() => goToSlide(currentIndex + 1), autoDelay);
  }

  function goToSlide(index, animate = true) {
    currentIndex = index;
    applyTransform(animate);
    scheduleAuto();
  }

  heroTrackEl.ontransitionend = () => {
    if (currentIndex === 0) {
      currentIndex = featuredHeroSlides.length;
      applyTransform(false);
    } else if (currentIndex === slides.length - 1) {
      currentIndex = 1;
      applyTransform(false);
    }
    syncActiveVisuals();
  };

  heroPrevBtn.onclick = () => goToSlide(currentIndex - 1);
  heroNextBtn.onclick = () => goToSlide(currentIndex + 1);
  heroOpenBtn.onclick = () => showImagePromptView(heroOpenBtn.getAttribute("data-image-key"));
  heroBrowseBtn.onclick = () => document.getElementById("categoriesTitle").scrollIntoView({ behavior: "smooth", block: "start" });

  heroTrackEl.onclick = (event) => {
    const slide = event.target.closest(".hero-slide[data-image-key]");
    if (slide) {
      showImagePromptView(slide.getAttribute("data-image-key"));
    }
  };

  heroTrackEl.onkeydown = (event) => {
    const slide = event.target.closest(".hero-slide[data-image-key]");
    if (!slide) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showImagePromptView(slide.getAttribute("data-image-key"));
    }
  };

  goToSlide(1, false);
}

copyBtn.addEventListener("click", () => {
  const text = copyBtn.getAttribute("data-copy-text") || "";
  navigator.clipboard.writeText(text).then(() => {
    const oldText = copyBtn.textContent;
    copyBtn.textContent = "Copied";
    setTimeout(() => {
      copyBtn.textContent = oldText;
    }, 1400);
  });
});

saveToPromptTyperBtn.addEventListener("click", async () => {
  const title = saveToPromptTyperBtn.getAttribute("data-prompt-title") || currentDetailPrompt?.title || "Imported Prompt";
  const content = saveToPromptTyperBtn.getAttribute("data-prompt-content") || currentDetailPrompt?.prompt || "";
  await handlePromptSend(title, content, "Prompt Bank", null);
});

detailTestBtn?.addEventListener("click", () => {
  if (!currentDetailPrompt) return;
  openTestModal(currentDetailPrompt);
});

togglePinBtn.addEventListener("click", () => {
  if (!currentDetailPrompt) return;
  const meta = getPromptMeta(currentDetailPrompt.id);
  meta.pinned = !meta.pinned;
  savePromptMeta();
  togglePinBtn.textContent = meta.pinned ? "Unpin" : "Pin";
  renderPromptList();
});

toggleFavoriteBtn.addEventListener("click", () => {
  if (!currentDetailPrompt) return;
  const meta = getPromptMeta(currentDetailPrompt.id);
  meta.favorite = !meta.favorite;
  savePromptMeta();
  toggleFavoriteBtn.textContent = meta.favorite ? "★ Unstar" : "☆ Star";
  renderPromptList();
});

backBtn.addEventListener("click", showListView);
imageBackBtn.addEventListener("click", showListView);
openAdminBtn.addEventListener("click", showAdminView);
closeAdminBtn.addEventListener("click", showListView);
adminResetBtn.addEventListener("click", resetAdminForm);
logoutBtnEl?.addEventListener("click", () => {
  if (!window.PromptBankAuth) return;
  window.PromptBankAuth.logout();
  window.location.href = window.PromptBankAuth.appPath("login/index.html");
});
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
searchInputEl.addEventListener("input", () => {
  searchQuery = searchInputEl.value;
  updateSearchUi();
  renderPromptList();
});
searchClearBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInputEl.value = "";
  updateSearchUi();
  renderPromptList();
  searchInputEl.focus();
});

quickFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-quick-filter]");
  if (!button) return;
  activeQuickFilter = button.getAttribute("data-quick-filter") || "all";
  renderQuickFilters();
  renderPromptList();
});

folderFilterEl?.addEventListener("change", () => {
  activeFolderFilter = folderFilterEl.value;
  renderPromptList();
});

tagFilterEl?.addEventListener("change", () => {
  activeTagFilter = tagFilterEl.value;
  renderPromptList();
});

variablesCancelBtn?.addEventListener("click", closeVariablesModal);
variablesSubmitBtn?.addEventListener("click", () => {
  if (!pendingVariableSubmission) return;
  const values = {};
  pendingVariableSubmission.vars.forEach((variable) => {
    const input = variablesFormEl.querySelector(`[data-variable-key="${variable.key}"]`);
    values[variable.key] = input ? input.value : "";
  });
  const filled = applyPromptVariables(
    pendingVariableSubmission.template,
    values,
    pendingVariableSubmission.vars
  );
  const submit = pendingVariableSubmission.onSubmit;
  closeVariablesModal();
  submit(filled);
});

testCloseBtn?.addEventListener("click", () => {
  pendingPlaygroundPrompt = null;
  testModalEl.classList.add("hidden");
  if (testHintEl) {
    testHintEl.textContent = "Tip: click any AI button to open with current rendered prompt.";
  }
});

testRunBtn?.addEventListener("click", () => {
  if (!pendingPlaygroundPrompt) return;
  const rendered = getPlaygroundRenderedPrompt();
  testOutputEl.textContent = rendered || "No prompt to test.";
});

aiLauncherRowEl?.addEventListener("click", (event) => {
  const newBtn = event.target.closest("[data-launcher-new]");
  if (newBtn) {
    promptForNewAiLauncher();
    return;
  }

  const removeBtn = event.target.closest("[data-launcher-remove]");
  if (removeBtn) {
    const id = removeBtn.getAttribute("data-launcher-remove");
    if (id) removeCustomAiLauncher(id);
    return;
  }

  const openBtn = event.target.closest("[data-launcher-open]");
  if (!openBtn) return;
  const id = openBtn.getAttribute("data-launcher-open");
  const provider = getAllAiLaunchers().find((item) => item.id === id);
  if (!provider) return;
  openPromptInProvider(provider);
});

exportPromptsBtn?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({ prompts: promptData, exportedAt: Date.now() }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `prompt-bank-export-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

importPromptsBtn?.addEventListener("click", () => importPromptsFile?.click());
importPromptsFile?.addEventListener("change", async () => {
  const [file] = importPromptsFile.files || [];
  if (!file) return;
  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    const incoming = Array.isArray(payload) ? payload : payload.prompts;
    if (!Array.isArray(incoming)) throw new Error("Invalid import file.");
    promptData = incoming.map(normalizePrompt);
    await savePromptLibrary();
    renderAll();
    adminStatusEl.textContent = "Import successful.";
  } catch (error) {
    adminStatusEl.textContent = error.message || "Import failed.";
  } finally {
    importPromptsFile.value = "";
  }
});

adminImageEl.addEventListener("change", async () => {
  const [file] = adminImageEl.files || [];
  if (!file) {
    pendingAdminImageData = "";
    updateAdminPreview(editingExistingImage);
    return;
  }
  if (!String(file.type || "").startsWith("image/")) {
    pendingAdminImageData = "";
    adminImageEl.value = "";
    adminStatusEl.textContent = "Please upload a valid image file.";
    updateAdminPreview(editingExistingImage);
    return;
  }
  if (file.size > maxImageUploadBytes) {
    pendingAdminImageData = "";
    adminImageEl.value = "";
    adminStatusEl.textContent = "Image is too large. Keep image under 8 MB.";
    updateAdminPreview(editingExistingImage);
    return;
  }
  try {
    pendingAdminImageData = await readFileAsDataUrl(file);
    updateAdminPreview(pendingAdminImageData);
    adminStatusEl.textContent = "Image ready. Click Save Prompt.";
  } catch (error) {
    pendingAdminImageData = "";
    adminImageEl.value = "";
    adminStatusEl.textContent = error.message || "Could not read selected image.";
    updateAdminPreview(editingExistingImage);
  }
});

adminForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = adminTitleEl.value.trim();
  const prompt = adminPromptEl.value.trim();
  if (!title || !prompt) {
    adminStatusEl.textContent = "Title and prompt are required.";
    return;
  }

  const id = adminPromptIdEl.value.trim() || slugify(title) || `prompt-${Date.now()}`;
  const existing = promptData.find((entry) => entry.id === id);
  const mainImage = pendingAdminImageData || editingExistingImage || "";
  const nextVersions = Array.isArray(existing?.versions) ? [...existing.versions] : [];
  if (existing) {
    nextVersions.unshift({
      title: existing.title,
      prompt: existing.prompt,
      tagline: existing.tagline,
      tags: existing.tags || [],
      folder: existing.folder || existing.category || "General",
      editedAt: Date.now()
    });
  }
  const item = normalizePrompt({
    id,
    title,
    category: adminCategoryEl.value.trim() || "General",
    folder: adminFolderEl.value.trim() || adminCategoryEl.value.trim() || "General",
    tags: parseTagList(adminTagsEl.value),
    tagline: adminTaglineEl.value.trim(),
    prompt,
    mainImage,
    images: mainImage ? [mainImage] : [],
    featuredInSlider: Boolean(mainImage && adminFeaturedEl.checked),
    versions: nextVersions.slice(0, 5),
    usageCount: Number(existing?.usageCount || 0),
    lastUsedAt: Number(existing?.lastUsedAt || 0),
  }, 0);

  const existingIndex = promptData.findIndex((entry) => entry.id === id);
  if (existingIndex >= 0) {
    promptData[existingIndex] = item;
  } else {
    promptData.unshift(item);
  }

  try {
    const saveResult = await savePromptLibrary();
    renderAll();
    resetAdminForm();
    adminStatusEl.textContent = saveResult.bridgeSaved
      ? "Prompt saved."
      : "Prompt saved locally. Open PromptTyper app to sync bridge.";
  } catch (error) {
    adminStatusEl.textContent = error.message;
  }
});

imagePromptGridEl.addEventListener("click", (event) => {
  const copyButton = event.target.closest("button[data-copy-image-prompt]");
  if (copyButton) {
    const text = copyButton.getAttribute("data-copy-image-prompt") || "";
    navigator.clipboard.writeText(text).then(() => {
      const oldText = copyButton.textContent;
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = oldText;
      }, 1200);
    });
    return;
  }

  const saveButton = event.target.closest("button[data-save-content]");
  if (saveButton) {
    handlePromptSend(
      saveButton.getAttribute("data-save-title") || "Imported Prompt",
      saveButton.getAttribute("data-save-content") || "",
      "Prompt Bank",
      saveButton
    );
    return;
  }

  const testButton = event.target.closest("button[data-test-content]");
  if (!testButton) return;
  openTestModal({
    id: slugify(testButton.getAttribute("data-test-title") || "test-prompt"),
    title: testButton.getAttribute("data-test-title") || "Prompt",
    category: "Image Prompt",
    prompt: testButton.getAttribute("data-test-content") || "",
    tagline: "",
    images: [],
    mainImage: "",
    featuredInSlider: false,
    folder: "Image Prompt",
    tags: [],
    versions: [],
    usageCount: 0,
    lastUsedAt: 0
  });
});

document.addEventListener("keydown", (event) => {
  const tag = event.target?.tagName?.toLowerCase();
  const isTyping = tag === "input" || tag === "textarea" || event.target?.isContentEditable;
  if (event.key === "Escape") {
    if (!variablesModalEl.classList.contains("hidden")) closeVariablesModal();
    if (!testModalEl.classList.contains("hidden")) {
      pendingPlaygroundPrompt = null;
      testModalEl.classList.add("hidden");
      if (testHintEl) {
        testHintEl.textContent = "Tip: click any AI button to open with current rendered prompt.";
      }
    }
    return;
  }
  if (isTyping) return;
  if (detailViewEl.classList.contains("hidden")) {
    if (event.key === "ArrowDown" && renderedPromptIds.length) {
      event.preventDefault();
      selectedPromptIndex = Math.min(renderedPromptIds.length - 1, selectedPromptIndex + 1);
      renderPromptList();
      document.querySelector(`.prompt-card[data-prompt-index="${selectedPromptIndex}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "ArrowUp" && renderedPromptIds.length) {
      event.preventDefault();
      selectedPromptIndex = Math.max(0, selectedPromptIndex - 1);
      renderPromptList();
      document.querySelector(`.prompt-card[data-prompt-index="${selectedPromptIndex}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter" && selectedPromptIndex >= 0 && renderedPromptIds[selectedPromptIndex]) {
      event.preventDefault();
      const item = promptData.find((entry) => entry.id === renderedPromptIds[selectedPromptIndex]);
      if (item) handlePromptSend(item.title, item.prompt, "Prompt Bank");
    }
  }
});

window.addEventListener("resize", () => {
  if (!heroSectionEl.classList.contains("hidden")) {
    setupHeroSlider();
  }
});

(async function init() {
  if (!window.PromptBankAuth) {
    window.location.href = "./login/index.html";
    return;
  }
  currentSessionUser = window.PromptBankAuth.requireAuth();
  if (!currentSessionUser) return;
  applySessionUi(currentSessionUser);

  loadPromptMeta();
  loadAiLaunchers();
  await loadPromptLibrary();
  const heroSeedChanged = ensureHeroSeedPrompts();
  if (heroSeedChanged) {
    try {
      await savePromptLibrary();
    } catch (_error) {
      // Keep UI usable even if bridge sync fails.
    }
  }
  await checkPromptTyperBridge();
  updateSearchUi();
  renderAll();

  const postLoginToast = window.PromptBankAuth.takePostLoginToast();
  if (postLoginToast) {
    showToast(postLoginToast);
  }

  if (window.location.hash === "#admin") {
    showAdminView();
  }
})();
