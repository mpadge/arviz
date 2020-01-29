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
      };var element = document.getElementById("ed816f46-a742-436f-bd79-ad619c5b93f0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ed816f46-a742-436f-bd79-ad619c5b93f0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f77430b-ca02-4253-8c07-573849ddabfd":{"roots":{"references":[{"attributes":{"source":{"id":"93524","type":"ColumnDataSource"}},"id":"93528","type":"CDSView"},{"attributes":{},"id":"93491","type":"PanTool"},{"attributes":{},"id":"93556","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93530","type":"MultiLine"},{"attributes":{"callback":null,"overlay":{"id":"93547","type":"PolyAnnotation"}},"id":"93495","type":"LassoSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"93487","type":"BasicTicker"}},"id":"93490","type":"Grid"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93512","type":"FixedTicker"},{"attributes":{},"id":"93552","type":"UnionRenderers"},{"attributes":{},"id":"93496","type":"UndoTool"},{"attributes":{},"id":"93497","type":"RedoTool"},{"attributes":{"callback":null},"id":"93473","type":"DataRange1d"},{"attributes":{"text":""},"id":"93541","type":"Title"},{"attributes":{},"id":"93479","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93521","type":"MultiLine"},{"attributes":{},"id":"93555","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93526","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93557","type":"Selection"},"selection_policy":{"id":"93556","type":"UnionRenderers"}},"id":"93534","type":"ColumnDataSource"},{"attributes":{},"id":"93493","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93475","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93551","type":"Selection"},"selection_policy":{"id":"93550","type":"UnionRenderers"}},"id":"93519","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93531","type":"MultiLine"},{"attributes":{},"id":"93551","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93491","type":"PanTool"},{"id":"93492","type":"BoxZoomTool"},{"id":"93493","type":"WheelZoomTool"},{"id":"93494","type":"BoxSelectTool"},{"id":"93495","type":"LassoSelectTool"},{"id":"93496","type":"UndoTool"},{"id":"93497","type":"RedoTool"},{"id":"93498","type":"ResetTool"},{"id":"93499","type":"SaveTool"},{"id":"93500","type":"HoverTool"}]},"id":"93501","type":"Toolbar"},{"attributes":{},"id":"93498","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93545","type":"BoxAnnotation"},{"attributes":{},"id":"93482","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93515","type":"Triangle"},{"attributes":{"data_source":{"id":"93519","type":"ColumnDataSource"},"glyph":{"id":"93520","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93521","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93523","type":"CDSView"}},"id":"93522","type":"GlyphRenderer"},{"attributes":{},"id":"93554","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xs":[[58.64374433958554,63.940348250569],[58.9697575323207,64.0621504149731]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93555","type":"Selection"},"selection_policy":{"id":"93554","type":"UnionRenderers"}},"id":"93529","type":"ColumnDataSource"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93543","type":"BasicTickFormatter"},"ticker":{"id":"93482","type":"BasicTicker"}},"id":"93481","type":"LinearAxis"},{"attributes":{},"id":"93499","type":"SaveTool"},{"attributes":{"overlay":{"id":"93545","type":"BoxAnnotation"}},"id":"93492","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"93481","type":"LinearAxis"}],"center":[{"id":"93485","type":"Grid"},{"id":"93490","type":"Grid"}],"left":[{"id":"93486","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93517","type":"GlyphRenderer"},{"id":"93522","type":"GlyphRenderer"},{"id":"93527","type":"GlyphRenderer"},{"id":"93532","type":"GlyphRenderer"},{"id":"93537","type":"GlyphRenderer"},{"id":"93539","type":"Span"}],"title":{"id":"93541","type":"Title"},"toolbar":{"id":"93501","type":"Toolbar"},"x_range":{"id":"93473","type":"DataRange1d"},"x_scale":{"id":"93477","type":"LinearScale"},"y_range":{"id":"93475","type":"DataRange1d"},"y_scale":{"id":"93479","type":"LinearScale"}},"id":"93472","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"93534","type":"ColumnDataSource"},"glyph":{"id":"93535","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93536","type":"Circle"},"selection_glyph":null,"view":{"id":"93538","type":"CDSView"}},"id":"93537","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93514","type":"ColumnDataSource"}},"id":"93518","type":"CDSView"},{"attributes":{},"id":"93553","type":"Selection"},{"attributes":{"data_source":{"id":"93524","type":"ColumnDataSource"},"glyph":{"id":"93525","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93526","type":"Circle"},"selection_glyph":null,"view":{"id":"93528","type":"CDSView"}},"id":"93527","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"93546","type":"BoxAnnotation"}},"id":"93494","type":"BoxSelectTool"},{"attributes":{},"id":"93487","type":"BasicTicker"},{"attributes":{},"id":"93549","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93549","type":"Selection"},"selection_policy":{"id":"93548","type":"UnionRenderers"}},"id":"93514","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93534","type":"ColumnDataSource"}},"id":"93538","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93547","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93520","type":"MultiLine"},{"attributes":{},"id":"93543","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"93514","type":"ColumnDataSource"},"glyph":{"id":"93515","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93516","type":"Triangle"},"selection_glyph":null,"view":{"id":"93518","type":"CDSView"}},"id":"93517","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93535","type":"Circle"},{"attributes":{},"id":"93557","type":"Selection"},{"attributes":{"formatter":{"id":"93542","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93512","type":"FixedTicker"}},"id":"93486","type":"LinearAxis"},{"attributes":{"ticker":{"id":"93482","type":"BasicTicker"}},"id":"93485","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93553","type":"Selection"},"selection_policy":{"id":"93552","type":"UnionRenderers"}},"id":"93524","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93546","type":"BoxAnnotation"},{"attributes":{},"id":"93542","type":"BasicTickFormatter"},{"attributes":{},"id":"93550","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93536","type":"Circle"},{"attributes":{},"id":"93548","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93529","type":"ColumnDataSource"},"glyph":{"id":"93530","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93531","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93533","type":"CDSView"}},"id":"93532","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93519","type":"ColumnDataSource"}},"id":"93523","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93516","type":"Triangle"},{"attributes":{"source":{"id":"93529","type":"ColumnDataSource"}},"id":"93533","type":"CDSView"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93539","type":"Span"},{"attributes":{},"id":"93477","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93525","type":"Circle"},{"attributes":{"callback":null},"id":"93500","type":"HoverTool"}],"root_ids":["93472"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"1f77430b-ca02-4253-8c07-573849ddabfd","roots":{"93472":"ed816f46-a742-436f-bd79-ad619c5b93f0"}}];
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