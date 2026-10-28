import { defineComponent as p, openBlock as s, createElementBlock as r, normalizeClass as c, createElementVNode as n, Fragment as h, renderList as d, toDisplayString as u, createCommentVNode as g, withDirectives as y, vModelText as C } from "vue";
const _ = [
  { category: "crm", label: "CRM" },
  { category: "martech", label: "Marketing" },
  { category: "uc", label: "Call Center" },
  { category: "enrich", label: "Enrichment" },
  { category: "ats", label: "ATS" },
  { category: "storage", label: "File Storage" },
  { category: "accounting", label: "Accounting" },
  { category: "hris", label: "HR & Directory" },
  { category: "payment", label: "Payments" },
  { category: "commerce", label: "E-Commerce" },
  { category: "genai", label: "Generative AI" },
  { category: "messaging", label: "Messaging" },
  { category: "kms", label: "Knowledge Management" },
  { category: "task", label: "Tasks" },
  { category: "lms", label: "Learning Management" },
  { category: "repo", label: "Code Repositories" },
  { category: "calendar", label: "Calendar & Meetings" },
  { category: "shipping", label: "Shipping" },
  { category: "forms", label: "Forms" },
  { category: "assessment", label: "Assessments" },
  { category: "ads", label: "Advertising" },
  { category: "verification", label: "Verifications" },
  { category: "ticketing", label: "Ticketing" },
  { category: "auth", label: "Authentication" },
  { category: "metadata", label: "Metadata" },
  { category: "passthrough", label: "Passthrough" },
  { category: "signing", label: "E-Signature" },
  { category: "clubs", label: "Clubs" },
  { category: "datastore", label: "Datastore" },
  { category: "analytics", label: "Analytics" },
  { category: "cdp", label: "Customer Data Platform" },
  { category: "saml", label: "SAML SSO Authentication" },
  { category: "performance", label: "Performance Management" },
  { category: "social", label: "Social Media" },
  { category: "legal", label: "Legal Practice Management" },
  { category: "compute", label: "Compute & Hosting" },
  { category: "healthcare", label: "Healthcare" }
], f = {
  us: "https://api.unified.to",
  us_beta: "https://api-beta.unified.to",
  eu: "https://api-eu.unified.to",
  eu_beta: "https://api-eu-beta.unified.to",
  au: "https://api-au.unified.to",
  dev: "https://api-dev.unified.to",
  localhost: "http://localhost:8000"
};
function b(e) {
  if (!e)
    return "auto";
  const t = e.toLowerCase().trim();
  return t === "dark" || t.startsWith("dark") ? "dark" : t === "light" || t.startsWith("light") ? "light" : "auto";
}
function E() {
  if (!(typeof window > "u"))
    return new URLSearchParams(window.location.search).get("theme") || void 0;
}
const A = p({
  name: "IntegrationsDirectory",
  props: {
    workspace_id: {
      type: String,
      required: !0
    },
    // your workspace_id found at https://app.unified.to/settings/api
    categories: Array,
    // An array of integration categories to limit the list of integrations (crm, ats, hr, uc,. ticketing, martech); defaults to the categories of `scopes`
    external_xref: String,
    // Your ID for the account/user that is signed into your application
    state: String,
    // A state string that will be sent back to your success URL
    scopes: Array,
    // An array of Unified.to permission scopes to request (e.g. crm_event_read), found at https://unified.to/apidocs#unified_object_connection; defaults to the permissions enabled on each integration in your workspace
    success_redirect: String,
    // The URL where you want the user to be redirect to after a successful authentication. The Integration ID will be appended with (id=) to this URL, as will the state provided
    failure_redirect: String,
    // The URL where you want the user to be redirect to after an unsuccessful or aborted authorization.  An 'error' variable will be appended.
    nostyle: Boolean,
    // Do not include Unified.to's styles.  You must then define CSS styles for the embedded directory classes.
    environment: String,
    // The development environment (Eg. Production, Sandbox, ...)
    lang: String,
    // The language for the API Key authorization page.  (en, fr, es, it, pt, hi, zh)
    notabs: Boolean,
    // Do not display tabs in the embedded directory
    nocategories: Boolean,
    // Do not display category badges for each integration
    dc: String,
    // data-region ('us'|'eu')
    theme: String
    // Theme mode: 'dark', 'light', or omit for auto-detect (also reads ?theme= from URL)
  },
  watch: {
    // async search() {
    //     await this.setup();
    // },
    async workspaceId() {
      await this.setup();
    },
    async "categories.length"() {
      await this.setup();
    },
    async environment() {
      await this.setup();
    },
    async lang() {
      await this.setup();
    },
    async "scopes.length"() {
      await this.setup();
    },
    async state() {
      await this.setup();
    },
    async external_xref() {
      await this.setup();
    }
  },
  computed: {
    // `categories` wins; otherwise list only the integrations in the categories of the requested `scopes` (`crm_event_read` is `crm`)
    filterCategories() {
      var t;
      if ((t = this.categories) != null && t.length)
        return this.categories;
      const e = (this.scopes || []).map((a) => a.split("_")[0]).filter((a) => this.CATEGORY_MAP[a]);
      return [...new Set(e)];
    },
    API_URL() {
      return f[this.dc || "us"] || f.us;
    },
    resolvedTheme() {
      return b(this.theme || E());
    },
    themeClass() {
      return this.resolvedTheme === "dark" ? "dark-theme" : this.resolvedTheme === "light" ? "unified-theme-light" : "";
    }
  },
  data() {
    return {
      search: "",
      INTEGRATIONS: [],
      selectedCategory: void 0,
      CATEGORIES: [],
      CATEGORY_MAP: _.reduce(
        (e, t) => (e[t.category] = t.label, e),
        {}
      )
    };
  },
  methods: {
    filter(e) {
      const t = this.search.toLowerCase();
      return console.log("filter", t), (e == null ? void 0 : e.filter(
        (a) => (!this.selectedCategory || a.categories.includes(this.selectedCategory)) && (!t || a.name.toLowerCase().includes(t) || a.type.toLowerCase().includes(t))
      )) || [];
    },
    unified_get_auth_url(e) {
      var a;
      let t = `${this.API_URL}/unified/integration/auth/${this.workspace_id}/${e.type}?redirect=1`;
      return this.external_xref && (t += `&external_xref=${encodeURIComponent(this.external_xref)}`), this.state && (t += `&state=${encodeURIComponent(this.state)}`), (a = this.scopes) != null && a.length && (t += `&scopes=${encodeURIComponent(this.scopes.join(","))}`), this.environment && this.environment !== "Production" && (t += `&env=${encodeURIComponent(this.environment)}`), this.lang && (t += `&lang=${this.lang}`), this.resolvedTheme !== "auto" && (t += `&theme=${encodeURIComponent(this.resolvedTheme)}`), t += `&success_redirect=${encodeURIComponent(this.success_redirect || window.location.href)}`, t += `&failure_redirect=${encodeURIComponent(this.failure_redirect || window.location.href)}`, t;
    },
    unified_select_category(e) {
      this.selectedCategory = e;
    },
    async load_data(e) {
      try {
        return (await fetch(e, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })).json();
      } catch {
        return;
      }
    },
    async setup() {
      this.selectedCategory = void 0;
      const e = `${this.API_URL}/unified/integration/workspace/${this.workspace_id}?summary=1${this.filterCategories.length ? "&categories=" + this.filterCategories.join(",") : ""}${this.environment === "Production" || !this.environment ? "" : "&env=" + encodeURIComponent(this.environment)}`;
      if (this.INTEGRATIONS = await this.load_data(e) || [], this.CATEGORIES = [], this.INTEGRATIONS.forEach((t) => {
        var a;
        (a = t.categories) == null || a.forEach((l) => {
          this.CATEGORY_MAP[l] && (!this.filterCategories.length || this.filterCategories.includes(l)) && this.CATEGORIES.push(l);
        });
      }), this.CATEGORIES = [...new Set(this.CATEGORIES)], this.CATEGORIES.length === 1 ? this.CATEGORIES = [] : this.CATEGORIES = this.CATEGORIES.sort(function(t, a) {
        return t.localeCompare(a);
      }), !this.nostyle) {
        const t = document.createElement("link");
        t.href = `${this.API_URL}/docs/unified.css`, t.rel = "stylesheet", document.head.appendChild(t);
      }
    }
  },
  async mounted() {
    await this.setup();
  }
}), v = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, m] of t)
    a[l] = m;
  return a;
}, T = {
  key: 0,
  class: "unified_menu"
}, R = ["onClick"], I = { style: { "margin-bottom": "16px" } }, S = { class: "unified_vendors" }, w = ["href"], k = ["src", "alt"], O = { class: "unified_vendor_inner" }, G = { class: "unified_vendor_name" }, $ = { key: 0 };
function M(e, t, a, l, m, P) {
  return s(), r("div", {
    class: c(["unified", e.themeClass])
  }, [
    !e.notabs && e.CATEGORIES.length > 0 && e.filter(e.INTEGRATIONS).length ? (s(), r("div", T, [
      n("button", {
        class: c(["unified_button unified_button_all", e.selectedCategory ? "" : "active"]),
        onClick: t[0] || (t[0] = (i) => e.unified_select_category())
      }, "All", 2),
      (s(!0), r(h, null, d(e.CATEGORIES, (i) => (s(), r("button", {
        key: i,
        class: c(`unified_button unified_button_${i} ${e.selectedCategory === i ? "active" : ""}`),
        onClick: (o) => e.unified_select_category(i)
      }, u(e.CATEGORY_MAP[i]), 11, R))), 128))
    ])) : g("", !0),
    n("div", I, [
      y(n("input", {
        type: "search",
        class: "unified_search",
        placeholder: "Search...",
        "onUpdate:modelValue": t[1] || (t[1] = (i) => e.search = i),
        style: { width: "100%" }
      }, null, 512), [
        [C, e.search]
      ])
    ]),
    n("div", S, [
      (s(!0), r(h, null, d(e.filter(e.INTEGRATIONS), (i) => (s(), r("a", {
        href: e.unified_get_auth_url(i),
        key: i.type,
        class: "unified_vendor"
      }, [
        n("img", {
          src: i.logo_url,
          alt: i.name,
          class: "unified_image"
        }, null, 8, k),
        n("div", O, [
          n("div", G, u(i.name), 1),
          e.nocategories ? g("", !0) : (s(!0), r(h, { key: 0 }, d(i.categories.filter((o) => !e.CATEGORIES || e.CATEGORIES.indexOf(o) > -1).filter((o) => e.CATEGORY_MAP[o]), (o) => (s(), r("div", {
            class: "unified_vendor_cats",
            key: o
          }, [
            n("span", null, u(e.CATEGORY_MAP[o]), 1)
          ]))), 128))
        ])
      ], 8, w))), 128)),
      e.filter(e.INTEGRATIONS).length ? g("", !0) : (s(), r("div", $, "No integrations available"))
    ])
  ], 2);
}
const U = /* @__PURE__ */ v(A, [["render", M]]);
export {
  U as default
};
