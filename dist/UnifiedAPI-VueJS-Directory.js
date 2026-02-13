import { defineComponent as m, openBlock as n, createElementBlock as a, createElementVNode as o, normalizeClass as f, Fragment as u, renderList as h, toDisplayString as g, createCommentVNode as p, withDirectives as _, vModelText as C } from "vue";
const E = [
  { category: "crm", label: "CRM" },
  { category: "martech", label: "Marketing" },
  { category: "uc", label: "Unified Communications" },
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
  { category: "verification", label: "Verifications" }
], y = {
  us: "https://api.unified.to",
  us_beta: "https://api-beta.unified.to",
  eu: "https://api-eu.unified.to",
  eu_beta: "https://api-eu-beta.unified.to",
  au: "https://api-au.unified.to",
  dev: "https://api-dev.unified.to"
}, A = m({
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
    dc: String
    // data-region ('us'|'eu')
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
  data() {
    return {
      search: "",
      API_URL: y[this.dc || "us"] || y.us,
      INTEGRATIONS: [],
      selectedCategory: void 0,
      CATEGORIES: [],
      CATEGORY_MAP: E.reduce(
        (e, t) => (e[t.category] = t.label, e),
        {}
      )
    };
  },
  methods: {
    filter(e) {
      const t = this.search.toLowerCase();
      return console.log("filter", t), (e == null ? void 0 : e.filter(
        (s) => (!this.selectedCategory || s.categories.includes(this.selectedCategory)) && (!t || s.name.toLowerCase().includes(t) || s.type.toLowerCase().includes(t))
      )) || [];
    },
    unified_get_auth_url(e) {
      var s;
      let t = `${this.API_URL}/unified/integration/auth/${this.workspace_id}/${e.type}?redirect=1`;
      return this.external_xref && (t += `&external_xref=${encodeURIComponent(this.external_xref)}`), this.state && (t += `&state=${encodeURIComponent(this.state)}`), (s = this.scopes) != null && s.length && (t += `&scopes=${encodeURIComponent(this.scopes.join(","))}`), this.environment && this.environment !== "Production" && (t += `&env=${encodeURIComponent(this.environment)}`), this.lang && (t += `&lang=${this.lang}`), t += `&success_redirect=${encodeURIComponent(this.success_redirect || window.location.href)}`, t += `&failure_redirect=${encodeURIComponent(this.failure_redirect || window.location.href)}`, t;
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
      if (this.INTEGRATIONS = await this.load_data(e) || [], this.CATEGORIES = [], this.INTEGRATIONS.forEach((s) => {
        var r;
        (r = s.categories) == null || r.forEach((c) => {
          var d;
          this.CATEGORY_MAP[c] && (!((d = this.categories) != null && d.length) || this.categories.includes(c)) && this.CATEGORIES.push(c);
        });
      }), this.CATEGORIES = [...new Set(this.CATEGORIES)], this.CATEGORIES.length === 1 ? this.CATEGORIES = [] : this.CATEGORIES = this.CATEGORIES.sort(function(s, r) {
        return s.localeCompare(r);
      }), !this.nostyle) {
        const s = document.createElement("link");
        s.href = `${this.API_URL}/docs/unified.css`, s.rel = "stylesheet", document.head.appendChild(s);
      }
    }
  },
  async mounted() {
    await this.setup();
  }
}), I = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, c] of t)
    s[r] = c;
  return s;
}, R = { class: "unified" }, v = {
  key: 0,
  class: "unified_menu"
}, b = ["onClick"], T = { style: { "margin-bottom": "16px" } }, S = { class: "unified_vendors" }, G = ["href"], O = ["src"], w = { class: "unified_vendor_inner" }, k = { class: "unified_vendor_name" }, $ = { key: 0 };
function N(e, t, s, r, c, d) {
  return n(), a("div", R, [
    !e.notabs && e.CATEGORIES.length > 0 && e.filter(e.INTEGRATIONS).length ? (n(), a("div", v, [
      o("button", {
        class: f(["unified_button unified_button_all", e.selectedCategory ? "" : "active"]),
        onClick: t[0] || (t[0] = (i) => e.unified_select_category())
      }, "All", 2),
      (n(!0), a(u, null, h(e.CATEGORIES, (i) => (n(), a("button", {
        key: i,
        class: f(`unified_button unified_button_${i} ${e.selectedCategory === i ? "active" : ""}`),
        onClick: (l) => e.unified_select_category(i)
      }, g(e.CATEGORY_MAP[i]), 11, b))), 128))
    ])) : p("", !0),
    o("div", T, [
      _(o("input", {
        type: "search",
        class: "unified_search",
        placeholder: "Search...",
        "onUpdate:modelValue": t[1] || (t[1] = (i) => e.search = i),
        style: { width: "100%" }
      }, null, 512), [
        [C, e.search]
      ])
    ]),
    o("div", S, [
      (n(!0), a(u, null, h(e.filter(e.INTEGRATIONS), (i) => (n(), a("a", {
        href: e.unified_get_auth_url(i),
        key: i.type,
        class: "unified_vendor"
      }, [
        o("img", {
          src: i.logo_url,
          class: "unified_image"
        }, null, 8, O),
        o("div", w, [
          o("div", k, g(i.name), 1),
          e.nocategories ? p("", !0) : (n(!0), a(u, { key: 0 }, h(i.categories.filter((l) => !e.CATEGORIES || e.CATEGORIES.indexOf(l) > -1).filter((l) => e.CATEGORY_MAP[l]), (l) => (n(), a("div", {
            class: "unified_vendor_cats",
            key: l
          }, [
            o("span", null, g(e.CATEGORY_MAP[l]), 1)
          ]))), 128))
        ])
      ], 8, G))), 128)),
      e.filter(e.INTEGRATIONS).length ? p("", !0) : (n(), a("div", $, "No integrations available"))
    ])
  ]);
}
const M = /* @__PURE__ */ I(A, [["render", N]]);
export {
  M as default
};
