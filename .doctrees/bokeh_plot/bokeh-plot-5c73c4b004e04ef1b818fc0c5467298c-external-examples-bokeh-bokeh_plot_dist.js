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
      };var element = document.getElementById("466b8ff5-c28f-4f59-9bf1-83bb1a6c5c7c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '466b8ff5-c28f-4f59-9bf1-83bb1a6c5c7c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d69ae0a4-bc68-4da8-9859-7852d79de4a4":{"roots":{"references":[{"attributes":{},"id":"95886","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95866","type":"Quad"},{"attributes":{},"id":"95821","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95881","type":"Line"},{"attributes":{},"id":"95808","type":"LinearScale"},{"attributes":{},"id":"95911","type":"Selection"},{"attributes":{},"id":"95843","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95865","type":"ColumnDataSource"},"glyph":{"id":"95866","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95867","type":"Quad"},"selection_glyph":null,"view":{"id":"95869","type":"CDSView"}},"id":"95868","type":"GlyphRenderer"},{"attributes":{},"id":"95907","type":"UnionRenderers"},{"attributes":{"below":[{"id":"95842","type":"LinearAxis"}],"center":[{"id":"95846","type":"Grid"},{"id":"95851","type":"Grid"},{"id":"95891","type":"Legend"}],"left":[{"id":"95847","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95882","type":"GlyphRenderer"}],"title":{"id":"95885","type":"Title"},"toolbar":{"id":"95858","type":"Toolbar"},"x_range":{"id":"95834","type":"DataRange1d"},"x_scale":{"id":"95838","type":"LinearScale"},"y_range":{"id":"95836","type":"DataRange1d"},"y_scale":{"id":"95840","type":"LinearScale"}},"id":"95833","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95890","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"95810","type":"LinearAxis"}],"center":[{"id":"95814","type":"Grid"},{"id":"95819","type":"Grid"},{"id":"95877","type":"Legend"}],"left":[{"id":"95815","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95868","type":"GlyphRenderer"}],"title":{"id":"95871","type":"Title"},"toolbar":{"id":"95826","type":"Toolbar"},"x_range":{"id":"95802","type":"DataRange1d"},"x_scale":{"id":"95806","type":"LinearScale"},"y_range":{"id":"95804","type":"DataRange1d"},"y_scale":{"id":"95808","type":"LinearScale"}},"id":"95801","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95811","type":"BasicTicker"},{"attributes":{},"id":"95838","type":"LinearScale"},{"attributes":{},"id":"95806","type":"LinearScale"},{"attributes":{"callback":null},"id":"95834","type":"DataRange1d"},{"attributes":{},"id":"95820","type":"PanTool"},{"attributes":{"ticker":{"id":"95811","type":"BasicTicker"}},"id":"95814","type":"Grid"},{"attributes":{},"id":"95857","type":"HelpTool"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"/Knx0k1ikD8rhxbZzvezP8P1KFyPwsU/NV66SQwCyz+q8dJNYhDIPzvfT42XbsI/c2iR7Xw/tT9MN4lBYOWwP9nO91PjpZs/O99PjZdugj/6fmq8dJNoP/p+arx0k2g/AAAAAAAAAAD8qfHSTWJgPw==","dtype":"float64","shape":[14]}},"selected":{"id":"95908","type":"Selection"},"selection_policy":{"id":"95907","type":"UnionRenderers"}},"id":"95865","type":"ColumnDataSource"},{"attributes":{},"id":"95823","type":"SaveTool"},{"attributes":{},"id":"95816","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95820","type":"PanTool"},{"id":"95821","type":"WheelZoomTool"},{"id":"95822","type":"BoxZoomTool"},{"id":"95823","type":"SaveTool"},{"id":"95824","type":"ResetTool"},{"id":"95825","type":"HelpTool"}]},"id":"95826","type":"Toolbar"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95882","type":"GlyphRenderer"}]},"id":"95892","type":"LegendItem"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95880","type":"Line"},{"attributes":{},"id":"95855","type":"SaveTool"},{"attributes":{},"id":"95888","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95867","type":"Quad"},{"attributes":{"data_source":{"id":"95879","type":"ColumnDataSource"},"glyph":{"id":"95880","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95881","type":"Line"},"selection_glyph":null,"view":{"id":"95883","type":"CDSView"}},"id":"95882","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95868","type":"GlyphRenderer"}]},"id":"95878","type":"LegendItem"},{"attributes":{"ticker":{"id":"95843","type":"BasicTicker"}},"id":"95846","type":"Grid"},{"attributes":{"formatter":{"id":"95888","type":"BasicTickFormatter"},"ticker":{"id":"95843","type":"BasicTicker"}},"id":"95842","type":"LinearAxis"},{"attributes":{"text":""},"id":"95871","type":"Title"},{"attributes":{},"id":"95848","type":"BasicTicker"},{"attributes":{"callback":null},"id":"95836","type":"DataRange1d"},{"attributes":{},"id":"95872","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"95865","type":"ColumnDataSource"}},"id":"95869","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"95816","type":"BasicTicker"}},"id":"95819","type":"Grid"},{"attributes":{},"id":"95825","type":"HelpTool"},{"attributes":{},"id":"95840","type":"LinearScale"},{"attributes":{},"id":"95874","type":"BasicTickFormatter"},{"attributes":{},"id":"95910","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"95876","type":"BoxAnnotation"}},"id":"95822","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"95892","type":"LegendItem"}]},"id":"95891","type":"Legend"},{"attributes":{"callback":null},"id":"95804","type":"DataRange1d"},{"attributes":{},"id":"95852","type":"PanTool"},{"attributes":{"children":[{"id":"95801","subtype":"Figure","type":"Plot"},{"id":"95833","subtype":"Figure","type":"Plot"}]},"id":"95893","type":"Row"},{"attributes":{"formatter":{"id":"95886","type":"BasicTickFormatter"},"ticker":{"id":"95848","type":"BasicTicker"}},"id":"95847","type":"LinearAxis"},{"attributes":{"formatter":{"id":"95874","type":"BasicTickFormatter"},"ticker":{"id":"95811","type":"BasicTicker"}},"id":"95810","type":"LinearAxis"},{"attributes":{"text":""},"id":"95885","type":"Title"},{"attributes":{"items":[{"id":"95878","type":"LegendItem"}]},"id":"95877","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95852","type":"PanTool"},{"id":"95853","type":"WheelZoomTool"},{"id":"95854","type":"BoxZoomTool"},{"id":"95855","type":"SaveTool"},{"id":"95856","type":"ResetTool"},{"id":"95857","type":"HelpTool"}]},"id":"95858","type":"Toolbar"},{"attributes":{"formatter":{"id":"95872","type":"BasicTickFormatter"},"ticker":{"id":"95816","type":"BasicTicker"}},"id":"95815","type":"LinearAxis"},{"attributes":{},"id":"95908","type":"Selection"},{"attributes":{"overlay":{"id":"95890","type":"BoxAnnotation"}},"id":"95854","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95911","type":"Selection"},"selection_policy":{"id":"95910","type":"UnionRenderers"}},"id":"95879","type":"ColumnDataSource"},{"attributes":{},"id":"95853","type":"WheelZoomTool"},{"attributes":{"source":{"id":"95879","type":"ColumnDataSource"}},"id":"95883","type":"CDSView"},{"attributes":{},"id":"95824","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"95848","type":"BasicTicker"}},"id":"95851","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95876","type":"BoxAnnotation"},{"attributes":{},"id":"95856","type":"ResetTool"},{"attributes":{"callback":null},"id":"95802","type":"DataRange1d"}],"root_ids":["95893"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"d69ae0a4-bc68-4da8-9859-7852d79de4a4","roots":{"95893":"466b8ff5-c28f-4f59-9bf1-83bb1a6c5c7c"}}];
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