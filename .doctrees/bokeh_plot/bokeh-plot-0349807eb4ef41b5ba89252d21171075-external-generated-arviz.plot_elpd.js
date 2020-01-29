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
      };var element = document.getElementById("fb0357ff-66e7-4b8d-a847-ad82b6c414a9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fb0357ff-66e7-4b8d-a847-ad82b6c414a9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"da80ffc3-5428-4cef-b43c-66bac39a965a":{"roots":{"references":[{"attributes":{},"id":"119862","type":"RedoTool"},{"attributes":{"text":"centered model - non centered model"},"id":"119882","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119878","type":"Cross"},{"attributes":{"overlay":{"id":"119889","type":"BoxAnnotation"}},"id":"119857","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"119856","type":"PanTool"},{"id":"119857","type":"BoxZoomTool"},{"id":"119858","type":"WheelZoomTool"},{"id":"119859","type":"BoxSelectTool"},{"id":"119860","type":"LassoSelectTool"},{"id":"119861","type":"UndoTool"},{"id":"119862","type":"RedoTool"},{"id":"119863","type":"ResetTool"},{"id":"119864","type":"SaveTool"},{"id":"119865","type":"HoverTool"}]},"id":"119866","type":"Toolbar"},{"attributes":{},"id":"119861","type":"UndoTool"},{"attributes":{},"id":"119892","type":"UnionRenderers"},{"attributes":{},"id":"119856","type":"PanTool"},{"attributes":{},"id":"119885","type":"BasicTickFormatter"},{"attributes":{},"id":"119858","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"119847","type":"BasicTicker"}},"id":"119850","type":"Grid"},{"attributes":{"callback":null},"id":"119838","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"119890","type":"BoxAnnotation"}},"id":"119859","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"119865","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119890","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"119887","type":"BasicTickFormatter"},"ticker":{"id":"119847","type":"BasicTicker"}},"id":"119846","type":"LinearAxis"},{"attributes":{},"id":"119847","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119889","type":"BoxAnnotation"},{"attributes":{"source":{"id":"119877","type":"ColumnDataSource"}},"id":"119881","type":"CDSView"},{"attributes":{},"id":"119842","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"119885","type":"BasicTickFormatter"},"ticker":{"id":"119852","type":"BasicTicker"}},"id":"119851","type":"LinearAxis"},{"attributes":{},"id":"119852","type":"BasicTicker"},{"attributes":{},"id":"119844","type":"LinearScale"},{"attributes":{},"id":"119863","type":"ResetTool"},{"attributes":{"callback":null},"id":"119840","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"119852","type":"BasicTicker"}},"id":"119855","type":"Grid"},{"attributes":{},"id":"119887","type":"BasicTickFormatter"},{"attributes":{},"id":"119864","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"119891","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"119893","type":"Selection"},"selection_policy":{"id":"119892","type":"UnionRenderers"}},"id":"119877","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"119877","type":"ColumnDataSource"},"glyph":{"id":"119878","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119879","type":"Cross"},"selection_glyph":null,"view":{"id":"119881","type":"CDSView"}},"id":"119880","type":"GlyphRenderer"},{"attributes":{},"id":"119893","type":"Selection"},{"attributes":{"below":[{"id":"119846","type":"LinearAxis"}],"center":[{"id":"119850","type":"Grid"},{"id":"119855","type":"Grid"}],"left":[{"id":"119851","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"119880","type":"GlyphRenderer"}],"title":{"id":"119882","type":"Title"},"toolbar":{"id":"119866","type":"Toolbar"},"x_range":{"id":"119838","type":"DataRange1d"},"x_scale":{"id":"119842","type":"LinearScale"},"y_range":{"id":"119840","type":"DataRange1d"},"y_scale":{"id":"119844","type":"LinearScale"}},"id":"119837","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119879","type":"Cross"},{"attributes":{"callback":null,"overlay":{"id":"119891","type":"PolyAnnotation"}},"id":"119860","type":"LassoSelectTool"}],"root_ids":["119837"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"da80ffc3-5428-4cef-b43c-66bac39a965a","roots":{"119837":"fb0357ff-66e7-4b8d-a847-ad82b6c414a9"}}];
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