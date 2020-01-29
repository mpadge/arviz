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
      };var element = document.getElementById("ab0326d2-17c2-4934-a87c-25fa7f205e1f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ab0326d2-17c2-4934-a87c-25fa7f205e1f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"12ebe2c9-2136-4dc0-80e1-709f1ca921a7":{"roots":{"references":[{"attributes":{"text":"Centered eight - Non centered eight"},"id":"96030","type":"Title"},{"attributes":{},"id":"96011","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96037","type":"BoxAnnotation"},{"attributes":{},"id":"96004","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"96027","type":"Cross"},{"attributes":{"dimension":1,"ticker":{"id":"96000","type":"BasicTicker"}},"id":"96003","type":"Grid"},{"attributes":{"source":{"id":"96025","type":"ColumnDataSource"}},"id":"96029","type":"CDSView"},{"attributes":{},"id":"96009","type":"UndoTool"},{"attributes":{"overlay":{"id":"96037","type":"BoxAnnotation"}},"id":"96005","type":"BoxZoomTool"},{"attributes":{},"id":"96040","type":"UnionRenderers"},{"attributes":{},"id":"96035","type":"BasicTickFormatter"},{"attributes":{},"id":"96033","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"96039","type":"PolyAnnotation"}},"id":"96008","type":"LassoSelectTool"},{"attributes":{},"id":"95992","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"96033","type":"BasicTickFormatter"},"ticker":{"id":"96000","type":"BasicTicker"}},"id":"95999","type":"LinearAxis"},{"attributes":{},"id":"95990","type":"LinearScale"},{"attributes":{"below":[{"id":"95994","type":"LinearAxis"}],"center":[{"id":"95998","type":"Grid"},{"id":"96003","type":"Grid"}],"left":[{"id":"95999","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96028","type":"GlyphRenderer"}],"title":{"id":"96030","type":"Title"},"toolbar":{"id":"96014","type":"Toolbar"},"x_range":{"id":"95986","type":"DataRange1d"},"x_scale":{"id":"95990","type":"LinearScale"},"y_range":{"id":"95988","type":"DataRange1d"},"y_scale":{"id":"95992","type":"LinearScale"}},"id":"95985","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"96035","type":"BasicTickFormatter"},"ticker":{"id":"95995","type":"BasicTicker"}},"id":"95994","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96025","type":"ColumnDataSource"},"glyph":{"id":"96026","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96027","type":"Cross"},"selection_glyph":null,"view":{"id":"96029","type":"CDSView"}},"id":"96028","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"95995","type":"BasicTicker"}},"id":"95998","type":"Grid"},{"attributes":{"callback":null},"id":"95986","type":"DataRange1d"},{"attributes":{},"id":"96000","type":"BasicTicker"},{"attributes":{},"id":"96012","type":"SaveTool"},{"attributes":{},"id":"96006","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"96041","type":"Selection"},"selection_policy":{"id":"96040","type":"UnionRenderers"}},"id":"96025","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96004","type":"PanTool"},{"id":"96005","type":"BoxZoomTool"},{"id":"96006","type":"WheelZoomTool"},{"id":"96007","type":"BoxSelectTool"},{"id":"96008","type":"LassoSelectTool"},{"id":"96009","type":"UndoTool"},{"id":"96010","type":"RedoTool"},{"id":"96011","type":"ResetTool"},{"id":"96012","type":"SaveTool"},{"id":"96013","type":"HoverTool"}]},"id":"96014","type":"Toolbar"},{"attributes":{"callback":null},"id":"95988","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96038","type":"BoxAnnotation"},{"attributes":{},"id":"96041","type":"Selection"},{"attributes":{},"id":"96010","type":"RedoTool"},{"attributes":{"callback":null},"id":"96013","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"96038","type":"BoxAnnotation"}},"id":"96007","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"96026","type":"Cross"},{"attributes":{},"id":"95995","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96039","type":"PolyAnnotation"}],"root_ids":["95985"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"12ebe2c9-2136-4dc0-80e1-709f1ca921a7","roots":{"95985":"ab0326d2-17c2-4934-a87c-25fa7f205e1f"}}];
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