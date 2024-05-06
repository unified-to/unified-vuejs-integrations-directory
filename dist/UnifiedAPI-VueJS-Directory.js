import { defineComponent as g, openBlock as s, createElementBlock as o, createElementVNode as d, normalizeClass as p, Fragment as u, renderList as h, toDisplayString as f, createCommentVNode as _ } from "vue";
const m = "https://api.unified.to", E = "https://api-eu.unified.to", C = g({
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
      API_URL: this.dc === "eu" ? E : m,
      INTEGRATIONS: [],
      selectedCategory: void 0,
      CATEGORIES: [],
      CATEGORY_MAP: {
        crm: "CRM",
        martech: "Marketing",
        ticketing: "Ticketing",
        uc: "Unified Communications",
        enrich: "Enrichment",
        ats: "ATS",
        storage: "Storage",
        accounting: "Accounting",
        hris: "HR",
        commerce: "Commerce",
        payment: "Payment",
        genai: "GenAI"
      }
    };
  },
  methods: {
    filter(e) {
      return (e == null ? void 0 : e.filter((t) => !this.selectedCategory || t.categories.includes(this.selectedCategory))) || [];
    },
    unified_get_auth_url(e) {
      var i;
      let t = `${this.API_URL}/unified/integration/auth/${this.workspace_id}/${e.type}?redirect=1`;
      return this.external_xref && (t += `&external_xref=${encodeURIComponent(this.external_xref)}`), this.state && (t += `&state=${encodeURIComponent(this.state)}`), (i = this.scopes) != null && i.length && (t += `&scopes=${encodeURIComponent(this.scopes.join(","))}`), this.environment && this.environment !== "Production" && (t += `&env=${encodeURIComponent(this.environment)}`), this.lang && (t += `&lang=${this.lang}`), t += `&success_redirect=${encodeURIComponent(this.success_redirect || window.location.href)}`, t += `&failure_redirect=${encodeURIComponent(this.failure_redirect || window.location.href)}`, t;
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
      if (this.INTEGRATIONS = await this.load_data(e) || [], this.CATEGORIES = [], this.INTEGRATIONS.forEach((i) => {
        var r;
        (r = i.categories) == null || r.forEach((c) => {
          var l;
          this.CATEGORY_MAP[c] && (!((l = this.categories) != null && l.length) || this.categories.includes(c)) && this.CATEGORIES.push(c);
        });
      }), this.CATEGORIES = [...new Set(this.CATEGORIES)], this.CATEGORIES.length === 1 ? this.CATEGORIES = [] : this.CATEGORIES = this.CATEGORIES.sort(function(i, r) {
        return i.localeCompare(r);
      }), !this.nostyle) {
        const i = document.createElement("link");
        i.href = `${this.API_URL}/docs/unified.css`, i.rel = "stylesheet", document.head.appendChild(i);
      }
    }
  },
  async mounted() {
    await this.setup();
  }
}), y = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, c] of t)
    i[r] = c;
  return i;
}, A = { class: "unified" }, I = {
  key: 0,
  class: "unified_menu"
}, R = ["onClick"], T = { class: "unified_vendors" }, v = ["href"], S = ["src"], G = { class: "unified_vendor_inner" }, O = { class: "unified_vendor_name" }, $ = { key: 0 };
function k(e, t, i, r, c, l) {
  return s(), o("div", A, [
    !e.notabs && e.CATEGORIES.length > 0 && e.filter(e.INTEGRATIONS).length ? (s(), o("div", I, [
      d("button", {
        class: p(["unified_button unified_button_all", e.selectedCategory ? "" : "active"]),
        onClick: t[0] || (t[0] = (n) => e.unified_select_category())
      }, "All", 2),
      (s(!0), o(u, null, h(e.CATEGORIES, (n) => (s(), o("button", {
        key: n,
        class: p(`unified_button unified_button_${n} ${e.selectedCategory === n ? "active" : ""}`),
        onClick: (a) => e.unified_select_category(n)
      }, f(e.CATEGORY_MAP[n]), 11, R))), 128))
    ])) : _("", !0),
    d("div", T, [
      (s(!0), o(u, null, h(e.filter(e.INTEGRATIONS), (n) => (s(), o("a", {
        href: e.unified_get_auth_url(n),
        key: n.type,
        class: "unified_vendor"
      }, [
        d("img", {
          src: n.logo_url,
          class: "unified_image"
        }, null, 8, S),
        d("div", G, [
          d("div", O, f(n.name), 1),
          e.nocategories ? _("", !0) : (s(!0), o(u, { key: 0 }, h(n.categories.filter((a) => !e.CATEGORIES || e.CATEGORIES.indexOf(a) > -1).filter((a) => e.CATEGORY_MAP[a]), (a) => (s(), o("div", {
            class: "unified_vendor_cats",
            key: a
          }, [
            d("span", null, f(e.CATEGORY_MAP[a]), 1)
          ]))), 128))
        ])
      ], 8, v))), 128)),
      e.filter(e.INTEGRATIONS).length ? _("", !0) : (s(), o("div", $, "No integrations available"))
    ])
  ]);
}
const N = /* @__PURE__ */ y(C, [["render", k]]);
export {
  N as default
};
