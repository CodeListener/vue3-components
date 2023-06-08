import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeStyle,
  openBlock,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  withDirectives
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/active-calendar-chart@1.0.2/node_modules/active-calendar-chart/dist/index.js
function y(e, n = 2) {
  return `${e}`.padStart(n, "0");
}
function N(e, n = "yyyy-MM-dd") {
  const t = new Date(e), s = t.getFullYear(), o = t.getMonth() + 1, l = t.getDate(), r = t.getHours(), d = t.getMinutes(), f = t.getSeconds();
  return n.replace("yyyy", `${s}`).replace("MM", `${y(o)}`).replace("dd", `${y(l)}`).replace("hh", `${y(r)}`).replace("mm", `${y(d)}`).replace("ss", `${y(f)}`);
}
var b = 864e5;
var R = /* @__PURE__ */ new Date();
var I = ((e) => (e[e.Jan = 1] = "Jan", e[e.Feb = 2] = "Feb", e[e.Mar = 3] = "Mar", e[e.Apr = 4] = "Apr", e[e.May = 5] = "May", e[e.Jun = 6] = "Jun", e[e.Jul = 7] = "Jul", e[e.Aug = 8] = "Aug", e[e.Sep = 9] = "Sep", e[e.Oct = 10] = "Oct", e[e.Nov = 11] = "Nov", e[e.Dec = 12] = "Dec", e))(I || {});
var L = ((e) => (e[e.Sun = 0] = "Sun", e[e.Mon = 1] = "Mon", e[e.Tues = 2] = "Tues", e[e.Wed = 3] = "Wed", e[e.Thur = 4] = "Thur", e[e.Fri = 5] = "Fri", e[e.Sat = 6] = "Sat", e))(L || {});
function H(e, n = 53) {
  const t = new Date(e), s = t.getDay(), o = t.getTime() - b * s, l = b * (n - 1) * 7;
  return new Date(o - l);
}
function T(e, n) {
  const t = [[], [], [], [], [], [], []], s = new Date(e), o = new Date(n), l = s.getDay();
  for (let r = 0; r < l; r++)
    t[r].push({
      year: s.getFullYear(),
      month: s.getMonth() + 1,
      date: N(new Date(s.getTime() - b * (r + 1)).getTime()),
      isEmpty: true
    });
  for (let r = s.getTime(); r <= o.getTime(); r += b) {
    const d = new Date(r), f = d.getDay();
    t[f].push({
      date: N(d.getTime()),
      isEmpty: false,
      year: d.getFullYear(),
      month: d.getMonth() + 1
    });
  }
  return t;
}
function O(e, n = true) {
  const t = /* @__PURE__ */ new Map(), s = e[0], o = e[e.length - 1];
  return s.forEach((l, r) => {
    const d = `${l.year}-${l.month}`;
    let f = t.get(d) || {
      span: 0,
      month: l.month,
      year: l.year,
      date: l.date
    };
    f.span += !n && r === 0 && (l.year !== o[r].year || l.month !== o[r].month) ? 0 : 1, t.set(d, f);
  }), [...t.values()];
}
function x(...e) {
  let n = [], t = [];
  if (e.length === 0)
    t = T(H(R), R);
  else if (e.length === 1) {
    const [s] = e;
    t = T(`${s}-01-01`, `${s}-12-31`);
  } else if (e.length === 2) {
    const [s, o] = e;
    t = T(s, o);
  }
  return n = O(t), { headers: n, rows: t };
}
var V = { class: "active-calendar-chart" };
var j = ["colspan"];
var Z = ["data-date"];
var q = { class: "description" };
var G = { style: { marginLeft: "4px" } };
var z = defineComponent({
  __name: "ActiveCalendarChart",
  props: {
    value: { default: () => ({}) },
    textAlign: { default: "left" },
    date: { default: void 0 },
    defaultColor: { default: "#ebedf0" },
    less: { default: "Less" },
    more: { default: "More" },
    colors: { default: () => [] },
    grid: { default: () => ({ width: "10px", height: "10px" }) },
    descripton: { default: void 0 }
  },
  setup(e) {
    const n = e, t = computed(() => n.date ? typeof n.date == "number" ? x(n.date) : x(n.date.start, n.date.end) : x()), s = {
      display: "inline-block",
      flexDirection: "column"
    }, o = computed(() => ({
      width: n.grid.width,
      height: n.grid.height
    })), l = computed(() => ({
      textAlign: n.textAlign,
      fontSize: "12px",
      color: "#1f2328",
      borderCollapse: "separate"
    })), r = {
      paddingBottom: "4px"
    }, d = {
      padding: 0,
      lineHeight: 1,
      boxSizing: "border-box"
    }, f = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#999",
      marginTop: "10px",
      fontWeight: 300
    }, W = {
      display: "flex",
      alignItems: "center"
    };
    return (h, K) => {
      var A;
      return openBlock(), createElementBlock("div", V, [
        createBaseVNode("div", {
          class: "wrapper",
          style: s
        }, [
          createBaseVNode("table", {
            style: normalizeStyle(unref(l))
          }, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", {
                  class: "first-grid",
                  style: r
                }, [
                  renderSlot(h.$slots, "first-grid")
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(t).headers, (u) => (openBlock(), createElementBlock("th", {
                  class: "month",
                  colspan: u.span,
                  style: r
                }, [
                  renderSlot(h.$slots, "month", {
                    item: u,
                    list: unref(t).headers
                  }, () => [
                    createBaseVNode("span", null, toDisplayString(u.span <= 3 ? "" : unref(I)[u.month]), 1)
                  ])
                ], 8, j))), 256))
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(t).rows, (u, C) => (openBlock(), createElementBlock("tr", null, [
                createBaseVNode("td", {
                  class: "week",
                  style: d
                }, [
                  renderSlot(h.$slots, "week", { item: C }, () => [
                    withDirectives(createBaseVNode("span", { style: { paddingRight: "10px" } }, toDisplayString(unref(L)[C]), 513), [
                      [vShow, C % 2 !== 0]
                    ])
                  ])
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(u, (S) => (openBlock(), createElementBlock("td", {
                  class: "date",
                  "data-date": S.date,
                  style: d
                }, [
                  renderSlot(h.$slots, "default", {
                    item: S,
                    row: u,
                    all: unref(t).rows
                  }, () => {
                    var F, k;
                    return [
                      createBaseVNode("div", {
                        style: normalizeStyle([unref(o), { backgroundColor: S.isEmpty ? "transparent" : ((k = (F = e.value) == null ? void 0 : F[S.date]) == null ? void 0 : k.color) ?? e.defaultColor }])
                      }, null, 4)
                    ];
                  })
                ], 8, Z))), 256))
              ]))), 256))
            ])
          ], 4),
          e.descripton || e.colors.length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "tfoot",
            style: f
          }, [
            createBaseVNode("div", q, toDisplayString(e.descripton), 1),
            withDirectives(createBaseVNode("div", {
              class: "colors",
              style: W
            }, [
              createBaseVNode("span", null, toDisplayString(e.less), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.colors, (u) => (openBlock(), createElementBlock("span", {
                class: "grid",
                style: normalizeStyle([unref(o), { backgroundColor: u, marginLeft: "4px" }])
              }, null, 4))), 256)),
              createBaseVNode("span", G, toDisplayString(e.more), 1)
            ], 512), [
              [vShow, (A = e.colors) == null ? void 0 : A.length]
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
z.install = (e) => {
  e.component("ActiveCalendarChart", z);
};
export {
  z as ActiveCalendarChart,
  z as default,
  x as generateChartData
};
//# sourceMappingURL=active-calendar-chart.js.map
