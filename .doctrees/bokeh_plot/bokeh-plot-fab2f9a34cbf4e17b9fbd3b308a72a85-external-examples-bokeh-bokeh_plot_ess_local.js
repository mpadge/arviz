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
      };var element = document.getElementById("e72ddd80-c7d9-4a61-be0d-518ac109c952");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e72ddd80-c7d9-4a61-be0d-518ac109c952' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"26a6e0e5-d27e-4b18-b172-a7d1872c88df":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"96469","type":"BasicTicker"}},"id":"96472","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"96514","type":"PolyAnnotation"}},"id":"96477","type":"LassoSelectTool"},{"attributes":{"ticker":{"id":"96464","type":"BasicTicker"}},"id":"96467","type":"Grid"},{"attributes":{"children":[{"id":"96522","type":"ToolbarBox"},{"id":"96520","type":"GridBox"}]},"id":"96523","type":"Column"},{"attributes":{"overlay":{"id":"96512","type":"BoxAnnotation"}},"id":"96474","type":"BoxZoomTool"},{"attributes":{},"id":"96464","type":"BasicTicker"},{"attributes":{"tools":[{"id":"96473","type":"PanTool"},{"id":"96474","type":"BoxZoomTool"},{"id":"96475","type":"WheelZoomTool"},{"id":"96476","type":"BoxSelectTool"},{"id":"96477","type":"LassoSelectTool"},{"id":"96478","type":"UndoTool"},{"id":"96479","type":"RedoTool"},{"id":"96480","type":"ResetTool"},{"id":"96481","type":"SaveTool"},{"id":"96482","type":"HoverTool"}]},"id":"96521","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"96454","subtype":"Figure","type":"Plot"},0,0]]},"id":"96520","type":"GridBox"},{"attributes":{},"id":"96515","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96504","type":"Span"},{"attributes":{"callback":null},"id":"96482","type":"HoverTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"96499","type":"Dash"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"96503","type":"Span"},{"attributes":{"callback":null},"id":"96457","type":"DataRange1d"},{"attributes":{"callback":null},"id":"96455","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"96518","type":"Selection"},"selection_policy":{"id":"96517","type":"UnionRenderers"}},"id":"96500","type":"ColumnDataSource"},{"attributes":{},"id":"96518","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96495","type":"Circle"},{"attributes":{},"id":"96473","type":"PanTool"},{"attributes":{"source":{"id":"96494","type":"ColumnDataSource"}},"id":"96498","type":"CDSView"},{"attributes":{"data_source":{"id":"96494","type":"ColumnDataSource"},"glyph":{"id":"96495","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96496","type":"Circle"},"selection_glyph":null,"view":{"id":"96498","type":"CDSView"}},"id":"96497","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"96508","type":"BasicTickFormatter"},"ticker":{"id":"96469","type":"BasicTicker"}},"id":"96468","type":"LinearAxis"},{"attributes":{},"id":"96480","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"96513","type":"BoxAnnotation"}},"id":"96476","type":"BoxSelectTool"},{"attributes":{"source":{"id":"96500","type":"ColumnDataSource"}},"id":"96502","type":"CDSView"},{"attributes":{},"id":"96517","type":"UnionRenderers"},{"attributes":{},"id":"96461","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96514","type":"PolyAnnotation"},{"attributes":{"text":"mu"},"id":"96505","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96512","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96496","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"96510","type":"BasicTickFormatter"},"ticker":{"id":"96464","type":"BasicTicker"}},"id":"96463","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96513","type":"BoxAnnotation"},{"attributes":{},"id":"96459","type":"LinearScale"},{"attributes":{},"id":"96508","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"96521","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96522","type":"ToolbarBox"},{"attributes":{},"id":"96478","type":"UndoTool"},{"attributes":{},"id":"96479","type":"RedoTool"},{"attributes":{},"id":"96481","type":"SaveTool"},{"attributes":{},"id":"96516","type":"Selection"},{"attributes":{},"id":"96510","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96473","type":"PanTool"},{"id":"96474","type":"BoxZoomTool"},{"id":"96475","type":"WheelZoomTool"},{"id":"96476","type":"BoxSelectTool"},{"id":"96477","type":"LassoSelectTool"},{"id":"96478","type":"UndoTool"},{"id":"96479","type":"RedoTool"},{"id":"96480","type":"ResetTool"},{"id":"96481","type":"SaveTool"},{"id":"96482","type":"HoverTool"}]},"id":"96483","type":"Toolbar"},{"attributes":{"data_source":{"id":"96500","type":"ColumnDataSource"},"glyph":{"id":"96499","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"96502","type":"CDSView"}},"id":"96501","type":"GlyphRenderer"},{"attributes":{},"id":"96475","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96516","type":"Selection"},"selection_policy":{"id":"96515","type":"UnionRenderers"}},"id":"96494","type":"ColumnDataSource"},{"attributes":{},"id":"96469","type":"BasicTicker"},{"attributes":{"below":[{"id":"96463","type":"LinearAxis"}],"center":[{"id":"96467","type":"Grid"},{"id":"96472","type":"Grid"}],"left":[{"id":"96468","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96497","type":"GlyphRenderer"},{"id":"96501","type":"GlyphRenderer"},{"id":"96503","type":"Span"},{"id":"96504","type":"Span"}],"title":{"id":"96505","type":"Title"},"toolbar":{"id":"96483","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96455","type":"DataRange1d"},"x_scale":{"id":"96459","type":"LinearScale"},"y_range":{"id":"96457","type":"DataRange1d"},"y_scale":{"id":"96461","type":"LinearScale"}},"id":"96454","subtype":"Figure","type":"Plot"}],"root_ids":["96523"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"26a6e0e5-d27e-4b18-b172-a7d1872c88df","roots":{"96523":"e72ddd80-c7d9-4a61-be0d-518ac109c952"}}];
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