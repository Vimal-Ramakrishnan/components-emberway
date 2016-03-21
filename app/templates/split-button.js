export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.12",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 88
        }
      },
      "moduleName": "fdui-test/templates/split-button.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","split-button-dropdown",[],["defaultValue","Submit","subMenu",["subexpr","@mut",[["get","model",["loc",[null,[2,54],[2,59]]]]],[],[]],"ontrigger","doSubmitAction"],["loc",[null,[2,0],[2,88]]]]
    ],
    locals: [],
    templates: []
  };
}()));