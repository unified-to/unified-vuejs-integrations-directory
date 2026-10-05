import { defineComponent as y, openBlock as s, createElementBlock as n, normalizeClass as h, createElementVNode as r, Fragment as u, renderList as g, toDisplayString as m, createCommentVNode as f, withDirectives as _, vModelText as C } from "vue";
const b = [
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
  { category: "social", label: "Social Media" }
], p = {
  us: "https://api.unified.to",
  us_beta: "https://api-beta.unified.to",
  eu: "https://api-eu.unified.to",
  eu_beta: "https://api-eu-beta.unified.to",
  au: "https://api-au.unified.to",
  dev: "https://api-dev.unified.to",
  localhost: "http://localhost:8000"
};
function E(e) {
  if (!e)
    return "auto";
  const t = e.toLowerCase().trim();
  return t === "dark" || t.startsWith("dark") ? "dark" : t === "light" || t.startsWith("light") ? "light" : "auto";
}
function A() {
  if (!(typeof window > "u"))
    return new URLSearchParams(window.location.search).get("theme") || void 0;
}
const v = y({
  name: "IntegrationsDirectory",
  props: {
    workspace_id: {
      type: String,
      required: !0
    },
    // your workspace_id found at https://app.unified.to/settings/api
    categories: Array,
    // An array of integration categories to limit the list of integrations (crm, ats, hr, uc,. ticketing, martech)
    external_xref: String,
    // Your ID for the account/user that is signed into your application
    state: String,
    // A state string that will be sent back to your success URL
    scopes: Array,
    // An array of Unified.to permission scopes to request from OAUTH2-based integrations found at https://unified.to/apidocs#unified_object_connection
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
    API_URL() {
      return p[this.dc || "us"] || p.us;
    },
    resolvedTheme() {
      return E(this.theme || A());
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
      CATEGORY_MAP: b.reduce(
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
      var t;
      this.selectedCategory = void 0;
      const e = `${this.API_URL}/unified/integration/workspace/${this.workspace_id}?summary=1${(t = this.categories) != null && t.length ? "&categories=" + this.categories.join(",") : ""}${this.environment === "Production" || !this.environment ? "" : "&env=" + encodeURIComponent(this.environment)}`;
      if (this.INTEGRATIONS = await this.load_data(e) || [], this.CATEGORIES = [], this.INTEGRATIONS.forEach((a) => {
        var o;
        (o = a.categories) == null || o.forEach((c) => {
          var d;
          this.CATEGORY_MAP[c] && (!((d = this.categories) != null && d.length) || this.categories.includes(c)) && this.CATEGORIES.push(c);
        });
      }), this.CATEGORIES = [...new Set(this.CATEGORIES)], this.CATEGORIES.length === 1 ? this.CATEGORIES = [] : this.CATEGORIES = this.CATEGORIES.sort(function(a, o) {
        return a.localeCompare(o);
      }), !this.nostyle) {
        const a = document.createElement("link");
        a.href = `${this.API_URL}/docs/unified.css`, a.rel = "stylesheet", document.head.appendChild(a);
      }
    }
  },
  async mounted() {
    await this.setup();
  }
}), T = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, c] of t)
    a[o] = c;
  return a;
}, I = {
  key: 0,
  class: "unified_menu"
}, R = ["onClick"], S = { style: { "margin-bottom": "16px" } }, w = { class: "unified_vendors" }, k = ["href"], O = ["src", "alt"], G = { class: "unified_vendor_inner" }, $ = { class: "unified_vendor_name" }, M = { key: 0 };
function P(e, t, a, o, c, d) {
  return s(), n("div", {
    class: h(["unified", e.themeClass])
  }, [
    !e.notabs && e.CATEGORIES.length > 0 && e.filter(e.INTEGRATIONS).length ? (s(), n("div", I, [
      r("button", {
        class: h(["unified_button unified_button_all", e.selectedCategory ? "" : "active"]),
        onClick: t[0] || (t[0] = (i) => e.unified_select_category())
      }, "All", 2),
      (s(!0), n(u, null, g(e.CATEGORIES, (i) => (s(), n("button", {
        key: i,
        class: h(`unified_button unified_button_${i} ${e.selectedCategory === i ? "active" : ""}`),
        onClick: (l) => e.unified_select_category(i)
      }, m(e.CATEGORY_MAP[i]), 11, R))), 128))
    ])) : f("", !0),
    r("div", S, [
      _(r("input", {
        type: "search",
        class: "unified_search",
        placeholder: "Search...",
        "onUpdate:modelValue": t[1] || (t[1] = (i) => e.search = i),
        style: { width: "100%" }
      }, null, 512), [
        [C, e.search]
      ])
    ]),
    r("div", w, [
      (s(!0), n(u, null, g(e.filter(e.INTEGRATIONS), (i) => (s(), n("a", {
        href: e.unified_get_auth_url(i),
        key: i.type,
        class: "unified_vendor"
      }, [
        r("img", {
          src: i.logo_url,
          alt: i.name,
          class: "unified_image"
        }, null, 8, O),
        r("div", G, [
          r("div", $, m(i.name), 1),
          e.nocategories ? f("", !0) : (s(!0), n(u, { key: 0 }, g(i.categories.filter((l) => !e.CATEGORIES || e.CATEGORIES.indexOf(l) > -1).filter((l) => e.CATEGORY_MAP[l]), (l) => (s(), n("div", {
            class: "unified_vendor_cats",
            key: l
          }, [
            r("span", null, m(e.CATEGORY_MAP[l]), 1)
          ]))), 128))
        ])
      ], 8, k))), 128)),
      e.filter(e.INTEGRATIONS).length ? f("", !0) : (s(), n("div", M, "No integrations available"))
    ])
  ], 2);
}
const U = /* @__PURE__ */ T(v, [["render", P]]);
export {
  U as default
};
