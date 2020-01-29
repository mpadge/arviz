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
      };var element = document.getElementById("a48f6d5d-4ae6-4afe-8ab9-eec5c93ad1f9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a48f6d5d-4ae6-4afe-8ab9-eec5c93ad1f9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"da7fe58c-95b0-430a-b5f6-cde5401081a9":{"roots":{"references":[{"attributes":{},"id":"96595","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"96600","type":"BasicTicker"}},"id":"96603","type":"Grid"},{"attributes":{"below":[{"id":"96594","type":"LinearAxis"}],"center":[{"id":"96598","type":"Grid"},{"id":"96603","type":"Grid"}],"left":[{"id":"96599","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96628","type":"GlyphRenderer"},{"id":"96630","type":"Span"}],"title":{"id":"96631","type":"Title"},"toolbar":{"id":"96614","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96586","type":"DataRange1d"},"x_scale":{"id":"96590","type":"LinearScale"},"y_range":{"id":"96588","type":"DataRange1d"},"y_scale":{"id":"96592","type":"LinearScale"}},"id":"96585","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"96588","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96642","type":"Selection"},"selection_policy":{"id":"96641","type":"UnionRenderers"}},"id":"96625","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96627","type":"Circle"},{"attributes":{},"id":"96642","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96639","type":"BoxAnnotation"},{"attributes":{},"id":"96612","type":"SaveTool"},{"attributes":{},"id":"96641","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"96604","type":"PanTool"},{"id":"96605","type":"BoxZoomTool"},{"id":"96606","type":"WheelZoomTool"},{"id":"96607","type":"BoxSelectTool"},{"id":"96608","type":"LassoSelectTool"},{"id":"96609","type":"UndoTool"},{"id":"96610","type":"RedoTool"},{"id":"96611","type":"ResetTool"},{"id":"96612","type":"SaveTool"},{"id":"96613","type":"HoverTool"}]},"id":"96645","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"96638","type":"BoxAnnotation"}},"id":"96605","type":"BoxZoomTool"},{"attributes":{},"id":"96600","type":"BasicTicker"},{"attributes":{},"id":"96609","type":"UndoTool"},{"attributes":{},"id":"96610","type":"RedoTool"},{"attributes":{},"id":"96611","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96626","type":"Circle"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96630","type":"Span"},{"attributes":{"children":[{"id":"96646","type":"ToolbarBox"},{"id":"96644","type":"GridBox"}]},"id":"96647","type":"Column"},{"attributes":{"children":[[{"id":"96585","subtype":"Figure","type":"Plot"},0,0]]},"id":"96644","type":"GridBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"96636","type":"BasicTickFormatter"},"ticker":{"id":"96595","type":"BasicTicker"}},"id":"96594","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96638","type":"BoxAnnotation"},{"attributes":{},"id":"96604","type":"PanTool"},{"attributes":{},"id":"96636","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"96613","type":"HoverTool"},{"attributes":{"source":{"id":"96625","type":"ColumnDataSource"}},"id":"96629","type":"CDSView"},{"attributes":{},"id":"96634","type":"BasicTickFormatter"},{"attributes":{},"id":"96590","type":"LinearScale"},{"attributes":{"toolbar":{"id":"96645","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96646","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96604","type":"PanTool"},{"id":"96605","type":"BoxZoomTool"},{"id":"96606","type":"WheelZoomTool"},{"id":"96607","type":"BoxSelectTool"},{"id":"96608","type":"LassoSelectTool"},{"id":"96609","type":"UndoTool"},{"id":"96610","type":"RedoTool"},{"id":"96611","type":"ResetTool"},{"id":"96612","type":"SaveTool"},{"id":"96613","type":"HoverTool"}]},"id":"96614","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"96639","type":"BoxAnnotation"}},"id":"96607","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"96625","type":"ColumnDataSource"},"glyph":{"id":"96626","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96627","type":"Circle"},"selection_glyph":null,"view":{"id":"96629","type":"CDSView"}},"id":"96628","type":"GlyphRenderer"},{"attributes":{},"id":"96592","type":"LinearScale"},{"attributes":{"ticker":{"id":"96595","type":"BasicTicker"}},"id":"96598","type":"Grid"},{"attributes":{"callback":null},"id":"96586","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"96640","type":"PolyAnnotation"}},"id":"96608","type":"LassoSelectTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"96634","type":"BasicTickFormatter"},"ticker":{"id":"96600","type":"BasicTicker"}},"id":"96599","type":"LinearAxis"},{"attributes":{"text":"sigma_y"},"id":"96631","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96640","type":"PolyAnnotation"},{"attributes":{},"id":"96606","type":"WheelZoomTool"}],"root_ids":["96647"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"da7fe58c-95b0-430a-b5f6-cde5401081a9","roots":{"96647":"a48f6d5d-4ae6-4afe-8ab9-eec5c93ad1f9"}}];
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