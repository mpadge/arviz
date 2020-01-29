(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("bccb0c69-4e73-4e46-b632-fa33f25e28bd");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bccb0c69-4e73-4e46-b632-fa33f25e28bd' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3f4b25f6-6be9-4b6b-872f-89aee62cc4b0":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"96750","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96786","type":"Line"},{"attributes":{"data_source":{"id":"96784","type":"ColumnDataSource"},"glyph":{"id":"96785","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96786","type":"Line"},"selection_glyph":null,"view":{"id":"96788","type":"CDSView"}},"id":"96787","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"96751","type":"Circle"},{"attributes":{"ticker":{"id":"96709","type":"BasicTicker"}},"id":"96712","type":"Grid"},{"attributes":{"data_source":{"id":"96749","type":"ColumnDataSource"},"glyph":{"id":"96750","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96751","type":"Circle"},"selection_glyph":null,"view":{"id":"96753","type":"CDSView"}},"id":"96752","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96869","type":"PolyAnnotation"},{"attributes":{"source":{"id":"96784","type":"ColumnDataSource"}},"id":"96788","type":"CDSView"},{"attributes":{"source":{"id":"96749","type":"ColumnDataSource"}},"id":"96753","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"96891","type":"Selection"},"selection_policy":{"id":"96890","type":"UnionRenderers"}},"id":"96789","type":"ColumnDataSource"},{"attributes":{},"id":"96709","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"96883","type":"Selection"},"selection_policy":{"id":"96882","type":"UnionRenderers"}},"id":"96769","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96790","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96755","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96791","type":"Line"},{"attributes":{"formatter":{"id":"96865","type":"BasicTickFormatter"},"ticker":{"id":"96709","type":"BasicTicker"}},"id":"96708","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96789","type":"ColumnDataSource"},"glyph":{"id":"96790","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96791","type":"Line"},"selection_glyph":null,"view":{"id":"96793","type":"CDSView"}},"id":"96792","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96756","type":"Line"},{"attributes":{"children":[[{"id":"96699","subtype":"Figure","type":"Plot"},0,0]]},"id":"96919","type":"GridBox"},{"attributes":{},"id":"96870","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"96754","type":"ColumnDataSource"},"glyph":{"id":"96755","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96756","type":"Line"},"selection_glyph":null,"view":{"id":"96758","type":"CDSView"}},"id":"96757","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96789","type":"ColumnDataSource"}},"id":"96793","type":"CDSView"},{"attributes":{"formatter":{"id":"96864","type":"BasicTickFormatter"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"96861","type":"FixedTicker"}},"id":"96713","type":"LinearAxis"},{"attributes":{"source":{"id":"96754","type":"ColumnDataSource"}},"id":"96758","type":"CDSView"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96893","type":"Selection"},"selection_policy":{"id":"96892","type":"UnionRenderers"}},"id":"96794","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"96879","type":"Selection"},"selection_policy":{"id":"96878","type":"UnionRenderers"}},"id":"96759","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"96795","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96868","type":"BoxAnnotation"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96760","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"96796","type":"Circle"},{"attributes":{"data_source":{"id":"96794","type":"ColumnDataSource"},"glyph":{"id":"96795","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96796","type":"Circle"},"selection_glyph":null,"view":{"id":"96798","type":"CDSView"}},"id":"96797","type":"GlyphRenderer"},{"attributes":{},"id":"96706","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96761","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96867","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":3.4499999999999997,"start":-0.8999999999999999},"id":"96702","type":"DataRange1d"},{"attributes":{"data_source":{"id":"96759","type":"ColumnDataSource"},"glyph":{"id":"96760","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96761","type":"Line"},"selection_glyph":null,"view":{"id":"96763","type":"CDSView"}},"id":"96762","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96794","type":"ColumnDataSource"}},"id":"96798","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"96871","type":"Selection"},"selection_policy":{"id":"96870","type":"UnionRenderers"}},"id":"96739","type":"ColumnDataSource"},{"attributes":{"source":{"id":"96759","type":"ColumnDataSource"}},"id":"96763","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"96901","type":"Selection"},"selection_policy":{"id":"96900","type":"UnionRenderers"}},"id":"96814","type":"ColumnDataSource"},{"attributes":{},"id":"96718","type":"PanTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96800","type":"Line"},{"attributes":{},"id":"96704","type":"LinearScale"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96881","type":"Selection"},"selection_policy":{"id":"96880","type":"UnionRenderers"}},"id":"96764","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"96765","type":"Circle"},{"attributes":{"overlay":{"id":"96867","type":"BoxAnnotation"}},"id":"96719","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96801","type":"Line"},{"attributes":{"data_source":{"id":"96799","type":"ColumnDataSource"},"glyph":{"id":"96800","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96801","type":"Line"},"selection_glyph":null,"view":{"id":"96803","type":"CDSView"}},"id":"96802","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"96766","type":"Circle"},{"attributes":{"data_source":{"id":"96764","type":"ColumnDataSource"},"glyph":{"id":"96765","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96766","type":"Circle"},"selection_glyph":null,"view":{"id":"96768","type":"CDSView"}},"id":"96767","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96799","type":"ColumnDataSource"}},"id":"96803","type":"CDSView"},{"attributes":{},"id":"96872","type":"UnionRenderers"},{"attributes":{"source":{"id":"96764","type":"ColumnDataSource"}},"id":"96768","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"96897","type":"Selection"},"selection_policy":{"id":"96896","type":"UnionRenderers"}},"id":"96804","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"96889","type":"Selection"},"selection_policy":{"id":"96888","type":"UnionRenderers"}},"id":"96784","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96805","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96770","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96806","type":"Line"},{"attributes":{"data_source":{"id":"96804","type":"ColumnDataSource"},"glyph":{"id":"96805","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96806","type":"Line"},"selection_glyph":null,"view":{"id":"96808","type":"CDSView"}},"id":"96807","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96771","type":"Line"},{"attributes":{"data_source":{"id":"96769","type":"ColumnDataSource"},"glyph":{"id":"96770","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96771","type":"Line"},"selection_glyph":null,"view":{"id":"96773","type":"CDSView"}},"id":"96772","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96804","type":"ColumnDataSource"}},"id":"96808","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96718","type":"PanTool"},{"id":"96719","type":"BoxZoomTool"},{"id":"96720","type":"WheelZoomTool"},{"id":"96721","type":"BoxSelectTool"},{"id":"96722","type":"LassoSelectTool"},{"id":"96723","type":"UndoTool"},{"id":"96724","type":"RedoTool"},{"id":"96725","type":"ResetTool"},{"id":"96726","type":"SaveTool"},{"id":"96727","type":"HoverTool"}]},"id":"96728","type":"Toolbar"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"96714","type":"BasicTicker"}},"id":"96717","type":"Grid"},{"attributes":{"source":{"id":"96769","type":"ColumnDataSource"}},"id":"96773","type":"CDSView"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96899","type":"Selection"},"selection_policy":{"id":"96898","type":"UnionRenderers"}},"id":"96809","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96741","type":"Line"},{"attributes":{"callback":null,"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"96885","type":"Selection"},"selection_policy":{"id":"96884","type":"UnionRenderers"}},"id":"96774","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"96810","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96775","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"96811","type":"Circle"},{"attributes":{"data_source":{"id":"96809","type":"ColumnDataSource"},"glyph":{"id":"96810","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96811","type":"Circle"},"selection_glyph":null,"view":{"id":"96813","type":"CDSView"}},"id":"96812","type":"GlyphRenderer"},{"attributes":{"text":"94.0% Credible Interval"},"id":"96859","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96776","type":"Line"},{"attributes":{"data_source":{"id":"96774","type":"ColumnDataSource"},"glyph":{"id":"96775","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96776","type":"Line"},"selection_glyph":null,"view":{"id":"96778","type":"CDSView"}},"id":"96777","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96809","type":"ColumnDataSource"}},"id":"96813","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96740","type":"Line"},{"attributes":{"data_source":{"id":"96739","type":"ColumnDataSource"},"glyph":{"id":"96740","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96741","type":"Line"},"selection_glyph":null,"view":{"id":"96743","type":"CDSView"}},"id":"96742","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96774","type":"ColumnDataSource"}},"id":"96778","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"96907","type":"Selection"},"selection_policy":{"id":"96906","type":"UnionRenderers"}},"id":"96829","type":"ColumnDataSource"},{"attributes":{"source":{"id":"96739","type":"ColumnDataSource"}},"id":"96743","type":"CDSView"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96887","type":"Selection"},"selection_policy":{"id":"96886","type":"UnionRenderers"}},"id":"96779","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96815","type":"Line"},{"attributes":{"callback":null,"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"96873","type":"Selection"},"selection_policy":{"id":"96872","type":"UnionRenderers"}},"id":"96744","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"96780","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96816","type":"Line"},{"attributes":{"data_source":{"id":"96814","type":"ColumnDataSource"},"glyph":{"id":"96815","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96816","type":"Line"},"selection_glyph":null,"view":{"id":"96818","type":"CDSView"}},"id":"96817","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96745","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"96781","type":"Circle"},{"attributes":{"data_source":{"id":"96779","type":"ColumnDataSource"},"glyph":{"id":"96780","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96781","type":"Circle"},"selection_glyph":null,"view":{"id":"96783","type":"CDSView"}},"id":"96782","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96746","type":"Line"},{"attributes":{"source":{"id":"96814","type":"ColumnDataSource"}},"id":"96818","type":"CDSView"},{"attributes":{"data_source":{"id":"96744","type":"ColumnDataSource"},"glyph":{"id":"96745","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96746","type":"Line"},"selection_glyph":null,"view":{"id":"96748","type":"CDSView"}},"id":"96747","type":"GlyphRenderer"},{"attributes":{},"id":"96714","type":"BasicTicker"},{"attributes":{"source":{"id":"96779","type":"ColumnDataSource"}},"id":"96783","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"96903","type":"Selection"},"selection_policy":{"id":"96902","type":"UnionRenderers"}},"id":"96819","type":"ColumnDataSource"},{"attributes":{"source":{"id":"96744","type":"ColumnDataSource"}},"id":"96748","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"96895","type":"Selection"},"selection_policy":{"id":"96894","type":"UnionRenderers"}},"id":"96799","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96820","type":"Line"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96875","type":"Selection"},"selection_policy":{"id":"96874","type":"UnionRenderers"}},"id":"96749","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96785","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96821","type":"Line"},{"attributes":{},"id":"96879","type":"Selection"},{"attributes":{"data_source":{"id":"96819","type":"ColumnDataSource"},"glyph":{"id":"96820","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96821","type":"Line"},"selection_glyph":null,"view":{"id":"96823","type":"CDSView"}},"id":"96822","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96854","type":"ColumnDataSource"}},"id":"96858","type":"CDSView"},{"attributes":{"tools":[{"id":"96718","type":"PanTool"},{"id":"96719","type":"BoxZoomTool"},{"id":"96720","type":"WheelZoomTool"},{"id":"96721","type":"BoxSelectTool"},{"id":"96722","type":"LassoSelectTool"},{"id":"96723","type":"UndoTool"},{"id":"96724","type":"RedoTool"},{"id":"96725","type":"ResetTool"},{"id":"96726","type":"SaveTool"},{"id":"96727","type":"HoverTool"}]},"id":"96920","type":"ProxyToolbar"},{"attributes":{},"id":"96891","type":"Selection"},{"attributes":{"source":{"id":"96819","type":"ColumnDataSource"}},"id":"96823","type":"CDSView"},{"attributes":{},"id":"96720","type":"WheelZoomTool"},{"attributes":{},"id":"96881","type":"Selection"},{"attributes":{},"id":"96916","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96905","type":"Selection"},"selection_policy":{"id":"96904","type":"UnionRenderers"}},"id":"96824","type":"ColumnDataSource"},{"attributes":{},"id":"96892","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"96825","type":"Circle"},{"attributes":{},"id":"96907","type":"Selection"},{"attributes":{},"id":"96889","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"96826","type":"Circle"},{"attributes":{},"id":"96904","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"96824","type":"ColumnDataSource"},"glyph":{"id":"96825","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96826","type":"Circle"},"selection_glyph":null,"view":{"id":"96828","type":"CDSView"}},"id":"96827","type":"GlyphRenderer"},{"attributes":{},"id":"96884","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"96868","type":"BoxAnnotation"}},"id":"96721","type":"BoxSelectTool"},{"attributes":{"source":{"id":"96824","type":"ColumnDataSource"}},"id":"96828","type":"CDSView"},{"attributes":{},"id":"96893","type":"Selection"},{"attributes":{"below":[{"id":"96708","type":"LinearAxis"}],"center":[{"id":"96712","type":"Grid"},{"id":"96717","type":"Grid"}],"left":[{"id":"96713","type":"LinearAxis"}],"outline_line_color":{"value":null},"output_backend":"webgl","plot_height":360,"plot_width":435,"renderers":[{"id":"96742","type":"GlyphRenderer"},{"id":"96747","type":"GlyphRenderer"},{"id":"96752","type":"GlyphRenderer"},{"id":"96757","type":"GlyphRenderer"},{"id":"96762","type":"GlyphRenderer"},{"id":"96767","type":"GlyphRenderer"},{"id":"96772","type":"GlyphRenderer"},{"id":"96777","type":"GlyphRenderer"},{"id":"96782","type":"GlyphRenderer"},{"id":"96787","type":"GlyphRenderer"},{"id":"96792","type":"GlyphRenderer"},{"id":"96797","type":"GlyphRenderer"},{"id":"96802","type":"GlyphRenderer"},{"id":"96807","type":"GlyphRenderer"},{"id":"96812","type":"GlyphRenderer"},{"id":"96817","type":"GlyphRenderer"},{"id":"96822","type":"GlyphRenderer"},{"id":"96827","type":"GlyphRenderer"},{"id":"96832","type":"GlyphRenderer"},{"id":"96837","type":"GlyphRenderer"},{"id":"96842","type":"GlyphRenderer"},{"id":"96847","type":"GlyphRenderer"},{"id":"96852","type":"GlyphRenderer"},{"id":"96857","type":"GlyphRenderer"}],"title":{"id":"96859","type":"Title"},"toolbar":{"id":"96728","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96700","type":"DataRange1d"},"x_scale":{"id":"96704","type":"LinearScale"},"y_range":{"id":"96702","type":"DataRange1d"},"y_scale":{"id":"96706","type":"LinearScale"}},"id":"96699","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"96913","type":"Selection"},"selection_policy":{"id":"96912","type":"UnionRenderers"}},"id":"96844","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"96869","type":"PolyAnnotation"}},"id":"96722","type":"LassoSelectTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96830","type":"Line"},{"attributes":{},"id":"96903","type":"Selection"},{"attributes":{},"id":"96894","type":"UnionRenderers"},{"attributes":{},"id":"96915","type":"Selection"},{"attributes":{},"id":"96723","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96831","type":"Line"},{"attributes":{},"id":"96864","type":"BasicTickFormatter"},{"attributes":{},"id":"96912","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"96829","type":"ColumnDataSource"},"glyph":{"id":"96830","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96831","type":"Line"},"selection_glyph":null,"view":{"id":"96833","type":"CDSView"}},"id":"96832","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96829","type":"ColumnDataSource"}},"id":"96833","type":"CDSView"},{"attributes":{},"id":"96908","type":"UnionRenderers"},{"attributes":{},"id":"96913","type":"Selection"},{"attributes":{},"id":"96882","type":"UnionRenderers"},{"attributes":{},"id":"96909","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"96909","type":"Selection"},"selection_policy":{"id":"96908","type":"UnionRenderers"}},"id":"96834","type":"ColumnDataSource"},{"attributes":{},"id":"96873","type":"Selection"},{"attributes":{},"id":"96865","type":"BasicTickFormatter"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96835","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96836","type":"Line"},{"attributes":{},"id":"96874","type":"UnionRenderers"},{"attributes":{},"id":"96726","type":"SaveTool"},{"attributes":{},"id":"96724","type":"RedoTool"},{"attributes":{"data_source":{"id":"96834","type":"ColumnDataSource"},"glyph":{"id":"96835","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96836","type":"Line"},"selection_glyph":null,"view":{"id":"96838","type":"CDSView"}},"id":"96837","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96727","type":"HoverTool"},{"attributes":{},"id":"96725","type":"ResetTool"},{"attributes":{"source":{"id":"96834","type":"ColumnDataSource"}},"id":"96838","type":"CDSView"},{"attributes":{},"id":"96895","type":"Selection"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96911","type":"Selection"},"selection_policy":{"id":"96910","type":"UnionRenderers"}},"id":"96839","type":"ColumnDataSource"},{"attributes":{},"id":"96875","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"96840","type":"Circle"},{"attributes":{"children":[{"id":"96921","type":"ToolbarBox"},{"id":"96919","type":"GridBox"}]},"id":"96922","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"96841","type":"Circle"},{"attributes":{"data_source":{"id":"96839","type":"ColumnDataSource"},"glyph":{"id":"96840","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96841","type":"Circle"},"selection_glyph":null,"view":{"id":"96843","type":"CDSView"}},"id":"96842","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96839","type":"ColumnDataSource"}},"id":"96843","type":"CDSView"},{"attributes":{},"id":"96885","type":"Selection"},{"attributes":{},"id":"96914","type":"UnionRenderers"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"96861","type":"FixedTicker"},{"attributes":{},"id":"96886","type":"UnionRenderers"},{"attributes":{},"id":"96906","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96845","type":"Line"},{"attributes":{},"id":"96887","type":"Selection"},{"attributes":{},"id":"96910","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"96846","type":"Line"},{"attributes":{},"id":"96900","type":"UnionRenderers"},{"attributes":{},"id":"96905","type":"Selection"},{"attributes":{},"id":"96917","type":"Selection"},{"attributes":{"data_source":{"id":"96844","type":"ColumnDataSource"},"glyph":{"id":"96845","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96846","type":"Line"},"selection_glyph":null,"view":{"id":"96848","type":"CDSView"}},"id":"96847","type":"GlyphRenderer"},{"attributes":{},"id":"96898","type":"UnionRenderers"},{"attributes":{},"id":"96888","type":"UnionRenderers"},{"attributes":{"source":{"id":"96844","type":"ColumnDataSource"}},"id":"96848","type":"CDSView"},{"attributes":{},"id":"96876","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"96700","type":"DataRange1d"},{"attributes":{},"id":"96899","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"96915","type":"Selection"},"selection_policy":{"id":"96914","type":"UnionRenderers"}},"id":"96849","type":"ColumnDataSource"},{"attributes":{},"id":"96890","type":"UnionRenderers"},{"attributes":{},"id":"96897","type":"Selection"},{"attributes":{"toolbar":{"id":"96920","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96921","type":"ToolbarBox"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96850","type":"Line"},{"attributes":{},"id":"96883","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"96851","type":"Line"},{"attributes":{},"id":"96902","type":"UnionRenderers"},{"attributes":{},"id":"96911","type":"Selection"},{"attributes":{"data_source":{"id":"96849","type":"ColumnDataSource"},"glyph":{"id":"96850","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96851","type":"Line"},"selection_glyph":null,"view":{"id":"96853","type":"CDSView"}},"id":"96852","type":"GlyphRenderer"},{"attributes":{"source":{"id":"96849","type":"ColumnDataSource"}},"id":"96853","type":"CDSView"},{"attributes":{},"id":"96901","type":"Selection"},{"attributes":{},"id":"96896","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{},"selected":{"id":"96917","type":"Selection"},"selection_policy":{"id":"96916","type":"UnionRenderers"}},"id":"96854","type":"ColumnDataSource"},{"attributes":{},"id":"96871","type":"Selection"},{"attributes":{},"id":"96877","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"96855","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"96856","type":"Circle"},{"attributes":{},"id":"96878","type":"UnionRenderers"},{"attributes":{},"id":"96880","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"96877","type":"Selection"},"selection_policy":{"id":"96876","type":"UnionRenderers"}},"id":"96754","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96854","type":"ColumnDataSource"},"glyph":{"id":"96855","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96856","type":"Circle"},"selection_glyph":null,"view":{"id":"96858","type":"CDSView"}},"id":"96857","type":"GlyphRenderer"}],"root_ids":["96922"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"3f4b25f6-6be9-4b6b-872f-89aee62cc4b0","roots":{"96922":"bccb0c69-4e73-4e46-b632-fa33f25e28bd"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();