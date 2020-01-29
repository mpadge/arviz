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
      };var element = document.getElementById("bb1ee512-2b33-4cab-acda-acacb651e5be");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bb1ee512-2b33-4cab-acda-acacb651e5be' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a02e2539-db71-4e11-96b1-ed86367892b4":{"roots":{"references":[{"attributes":{"formatter":{"id":"97449","type":"BasicTickFormatter"},"ticker":{"id":"97412","type":"BasicTicker"}},"id":"97411","type":"LinearAxis"},{"attributes":{},"id":"97457","type":"Selection"},{"attributes":{},"id":"97412","type":"BasicTicker"},{"attributes":{"below":[{"id":"97406","type":"LinearAxis"}],"center":[{"id":"97410","type":"Grid"},{"id":"97415","type":"Grid"}],"left":[{"id":"97411","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97440","type":"GlyphRenderer"},{"id":"97445","type":"GlyphRenderer"}],"title":{"id":"97448","type":"Title"},"toolbar":{"id":"97426","type":"Toolbar"},"x_range":{"id":"97398","type":"DataRange1d"},"x_scale":{"id":"97402","type":"LinearScale"},"y_range":{"id":"97400","type":"DataRange1d"},"y_scale":{"id":"97404","type":"LinearScale"}},"id":"97397","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"97423","type":"ResetTool"},{"attributes":{},"id":"97449","type":"BasicTickFormatter"},{"attributes":{},"id":"97422","type":"RedoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"uL5HwSkVAMDhIkKGusH8vxxFPFlr9/i/pJknh6nX97/CXKcANU/3v/zH7zvnIve/egGnOLAZ97/TqYOUQf31vx+us+2myfW/7yOx8uGc9b8Z5snuucv0vy1akr5ZlPO/Rcm63i86879GSr/iLjXzv9XtcSDMKfO/T6My+nM78b/zEn0kiYfwv5+p4cyQF/C/DNkCMiDo6r8yKlKYQKPov5Zk5M03Uei/aR/pgMFy5792HKDehcnlv5c8bj/DJuS/fW3cXMU34r9YAunc0efhv/B89+T1JOG/MayqcVRE4L/fmAZn48XYv785z8x7GNG/8MVHbuljzL8toE6vczLLvwriiv+UDsu/Fwa2JXHswr+VMiAbTMu4v+0JWhU9/rW/icLHNsDvo782ZdPqe+96PwiHtFZJJYY/wjRCuhAfkD+XMNJKKdmgP8tWy2Wnk6M/4mNzyXk/pD8g+RHqArGuP7PFbhzGkrY/PjRhrBWbvD/RkA4of3m9P1z37AkCyb4/UOztX9CWvz9+oi6DmTHDP9c0NOvuScM/VJY3Alg1xD9nPOtadtbLP07BvPXE18s/HyK2iGTx0D/Nbqc3a5DRPxYAmdDnF9M/7VOKVyD91T8jbAQtLpLXP03MTru0hNg/WCrKRmK22D9JpeW4iEzZP73WZCICLNs/LSB07/TP2z9jM4F3u6LdP79MBkvyB98/qdViF8024D8D0mgsBVrgP6EEYR0wXuI/XcXcheqt4z8GljUNb8DjP+DdRFskceQ/Jv1AAW7Z5T87a9upRCnmP0Ad/g2aTuY/0v6AlSK35j94KikCXHHoP0kdW/AmJeo/TpufzJDF6j8dSANDgBzrPw1RfAhEfOs/wG9BP7lU7D+KflSd9LTtP2iBIjpBbe4/0PC1G9QW7z9HPpmybJ/vPzFcmcgUKvE/8BDMDtzc8j9LvE5WuvXyP0uLBTTxwvM/41ZC5Qcv9D/4Z5gxNUX0P5M2TvykmvU/FjwEv/Vf+D8SqizQ7235P1H+9MGanPs/R5MtS1GB/T9OJ5euAtn9PwcnmmU13v8/9fb1YtItAkA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"kIJwfazV7z+Q7t68Ip/xP3LdYVNKhPM/LjNsPCsU9D+fUax/ZVj0PwIcCGKMbvQ/Q3+s4ydz9D8WK741XwH1P/AoJoksG/U/CG6nBo8x9T/0DJsII5r1P+rStiDTNfY/XpuiEOhi9j/dWqCOaGX2PxYJx+8Za/Y/WK7mAkZi9z+GdsFtO7z3PzArj5k39Pc/vUl/8/dF+T90devZL9f5P9rmhgyy6/k/JrjFn08j+j/i+FeIno36P9pwJDBP9vo/oeTIqA5y+z9qv8WIC4b7P8QgwobCtvs/9FSV4+ru+z/kLB+TQ+f8P8gYZobw3P0/oYMbacE5/j/9FQvF2Ez+P99RB7AWT/4/n5+k7TjR/j9r/iafpTn/P7EvVRcOUP8/9uAk/0Cw/z/ZtPreuwYAQERaq6QSCwBANUK6EB8QAEBhpJVSsiEAQK6Wy04nJwBAyOaS834oAEDyI9QFYj0AQBe7cRhLWgBA0YSxVmxyAEBDOqD85XUAQN2zJwgkewBAsbd/QVt+AEAUdRnMjJkAQKehWXdPmgBAs7wRwKqhAEDjWdeys94AQArmrSe+3gBAImKLSBYPAUDtdnqzBhkBQAGQCX1+MQFAP6V4BdJfAUDCRtDiInkBQMXstEtLiAFApqJsJGaLAUBVWo6LyJQBQGxNJiLAsgFAA0L3Tv+8AUA2E3i3K9oBQMxksCR/8AFAtVrsotkGAkBAGo2lQAsCQJQgrAPGSwJArJi7UL11AkDBsqbhDXgCQLybaIskjgJApR8owC27AkBnbTuVKMUCQKjDv0HTyQJA2h+wUuTWAkBPJUWAKw4DQKljC96kRANAavOTGbJYA0AEaWAIkGMDQCKKD4GIbwNA+C3oJ5eKA0DRj6qTnrYDQC1QRCeozQNAGr52g9riA0DJJ1OW7fMDQAxXJjKFSgRAPASzAze3BEATr5OVbr0EQNNiAU288ARAuZVQ+cELBUD+GWZMTREFQKWNEz+pZgVABg/Bb/0XBkCEKgv0e1sGQJQ/fbAm5wZA0mTLUlRgB0DUyaWrQHYHQMKJZlmN9wdAevt6MekWCUA=","dtype":"float64","shape":[100]}},"selected":{"id":"97459","type":"Selection"},"selection_policy":{"id":"97458","type":"UnionRenderers"}},"id":"97442","type":"ColumnDataSource"},{"attributes":{},"id":"97456","type":"UnionRenderers"},{"attributes":{},"id":"97458","type":"UnionRenderers"},{"attributes":{},"id":"97402","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97457","type":"Selection"},"selection_policy":{"id":"97456","type":"UnionRenderers"}},"id":"97437","type":"ColumnDataSource"},{"attributes":{},"id":"97424","type":"SaveTool"},{"attributes":{},"id":"97421","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97455","type":"PolyAnnotation"},{"attributes":{},"id":"97418","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97444","type":"Line"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97443","type":"Line"},{"attributes":{"overlay":{"id":"97453","type":"BoxAnnotation"}},"id":"97417","type":"BoxZoomTool"},{"attributes":{},"id":"97407","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"97454","type":"BoxAnnotation"}},"id":"97419","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"97400","type":"DataRange1d"},{"attributes":{},"id":"97404","type":"LinearScale"},{"attributes":{"callback":null},"id":"97425","type":"HoverTool"},{"attributes":{},"id":"97416","type":"PanTool"},{"attributes":{"data_source":{"id":"97437","type":"ColumnDataSource"},"glyph":{"id":"97438","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97439","type":"Patch"},"selection_glyph":null,"view":{"id":"97441","type":"CDSView"}},"id":"97440","type":"GlyphRenderer"},{"attributes":{},"id":"97459","type":"Selection"},{"attributes":{"data_source":{"id":"97442","type":"ColumnDataSource"},"glyph":{"id":"97443","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97444","type":"Line"},"selection_glyph":null,"view":{"id":"97446","type":"CDSView"}},"id":"97445","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"97398","type":"DataRange1d"},{"attributes":{"text":""},"id":"97448","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97438","type":"Patch"},{"attributes":{},"id":"97451","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"97442","type":"ColumnDataSource"}},"id":"97446","type":"CDSView"},{"attributes":{"source":{"id":"97437","type":"ColumnDataSource"}},"id":"97441","type":"CDSView"},{"attributes":{"ticker":{"id":"97407","type":"BasicTicker"}},"id":"97410","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97416","type":"PanTool"},{"id":"97417","type":"BoxZoomTool"},{"id":"97418","type":"WheelZoomTool"},{"id":"97419","type":"BoxSelectTool"},{"id":"97420","type":"LassoSelectTool"},{"id":"97421","type":"UndoTool"},{"id":"97422","type":"RedoTool"},{"id":"97423","type":"ResetTool"},{"id":"97424","type":"SaveTool"},{"id":"97425","type":"HoverTool"}]},"id":"97426","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"97412","type":"BasicTicker"}},"id":"97415","type":"Grid"},{"attributes":{"formatter":{"id":"97451","type":"BasicTickFormatter"},"ticker":{"id":"97407","type":"BasicTicker"}},"id":"97406","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97439","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97454","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"97455","type":"PolyAnnotation"}},"id":"97420","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97453","type":"BoxAnnotation"}],"root_ids":["97397"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"a02e2539-db71-4e11-96b1-ed86367892b4","roots":{"97397":"bb1ee512-2b33-4cab-acda-acacb651e5be"}}];
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