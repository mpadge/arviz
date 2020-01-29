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
      };var element = document.getElementById("1f8c9b83-1962-4399-b12d-52a4f7937089");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1f8c9b83-1962-4399-b12d-52a4f7937089' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1ce8945f-accd-40cf-8934-a7e525077228":{"roots":{"references":[{"attributes":{},"id":"114295","type":"Selection"},{"attributes":{"callback":null},"id":"114219","type":"DataRange1d"},{"attributes":{},"id":"114296","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"114233","type":"BasicTicker"}},"id":"114236","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114259","type":"Circle"},{"attributes":{},"id":"114297","type":"Selection"},{"attributes":{"below":[{"id":"114227","type":"LinearAxis"}],"center":[{"id":"114231","type":"Grid"},{"id":"114236","type":"Grid"}],"left":[{"id":"114232","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114275","type":"GlyphRenderer"},{"id":"114277","type":"Span"},{"id":"114278","type":"Span"},{"id":"114279","type":"Span"},{"id":"114282","type":"GlyphRenderer"}],"title":{"id":"114284","type":"Title"},"toolbar":{"id":"114247","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114219","type":"DataRange1d"},"x_scale":{"id":"114223","type":"LinearScale"},"y_range":{"id":"114221","type":"DataRange1d"},"y_scale":{"id":"114225","type":"LinearScale"}},"id":"114218","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114300","type":"BasicTickFormatter"},{"attributes":{},"id":"114302","type":"BasicTickFormatter"},{"attributes":{},"id":"114197","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114304","type":"BoxAnnotation"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114287","type":"BasicTickFormatter"},"ticker":{"id":"114193","type":"BasicTicker"}},"id":"114192","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114266","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114305","type":"BoxAnnotation"},{"attributes":{},"id":"114237","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114306","type":"PolyAnnotation"},{"attributes":{},"id":"114199","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"114188","type":"BasicTicker"}},"id":"114191","type":"Grid"},{"attributes":{},"id":"114185","type":"LinearScale"},{"attributes":{},"id":"114307","type":"UnionRenderers"},{"attributes":{},"id":"114188","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114237","type":"PanTool"},{"id":"114238","type":"BoxZoomTool"},{"id":"114239","type":"WheelZoomTool"},{"id":"114240","type":"BoxSelectTool"},{"id":"114241","type":"LassoSelectTool"},{"id":"114242","type":"UndoTool"},{"id":"114243","type":"RedoTool"},{"id":"114244","type":"ResetTool"},{"id":"114245","type":"SaveTool"},{"id":"114246","type":"HoverTool"}]},"id":"114247","type":"Toolbar"},{"attributes":{},"id":"114308","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114289","type":"BasicTickFormatter"},"ticker":{"id":"114188","type":"BasicTicker"}},"id":"114187","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114297","type":"Selection"},"selection_policy":{"id":"114296","type":"UnionRenderers"}},"id":"114267","type":"ColumnDataSource"},{"attributes":{},"id":"114309","type":"UnionRenderers"},{"attributes":{},"id":"114183","type":"LinearScale"},{"attributes":{},"id":"114310","type":"Selection"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114181","type":"DataRange1d"},{"attributes":{"data_source":{"id":"114267","type":"ColumnDataSource"},"glyph":{"id":"114266","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114269","type":"CDSView"}},"id":"114268","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114260","type":"Circle"},{"attributes":{"tools":[{"id":"114197","type":"PanTool"},{"id":"114198","type":"BoxZoomTool"},{"id":"114199","type":"WheelZoomTool"},{"id":"114200","type":"BoxSelectTool"},{"id":"114201","type":"LassoSelectTool"},{"id":"114202","type":"UndoTool"},{"id":"114203","type":"RedoTool"},{"id":"114204","type":"ResetTool"},{"id":"114205","type":"SaveTool"},{"id":"114206","type":"HoverTool"},{"id":"114237","type":"PanTool"},{"id":"114238","type":"BoxZoomTool"},{"id":"114239","type":"WheelZoomTool"},{"id":"114240","type":"BoxSelectTool"},{"id":"114241","type":"LassoSelectTool"},{"id":"114242","type":"UndoTool"},{"id":"114243","type":"RedoTool"},{"id":"114244","type":"ResetTool"},{"id":"114245","type":"SaveTool"},{"id":"114246","type":"HoverTool"}]},"id":"114313","type":"ProxyToolbar"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114300","type":"BasicTickFormatter"},"ticker":{"id":"114233","type":"BasicTicker"}},"id":"114232","type":"LinearAxis"},{"attributes":{},"id":"114223","type":"LinearScale"},{"attributes":{},"id":"114239","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"114313","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114314","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"114291","type":"BoxAnnotation"}},"id":"114198","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114302","type":"BasicTickFormatter"},"ticker":{"id":"114228","type":"BasicTicker"}},"id":"114227","type":"LinearAxis"},{"attributes":{"source":{"id":"114267","type":"ColumnDataSource"}},"id":"114269","type":"CDSView"},{"attributes":{"children":[{"id":"114314","type":"ToolbarBox"},{"id":"114312","type":"GridBox"}]},"id":"114315","type":"Column"},{"attributes":{},"id":"114202","type":"UndoTool"},{"attributes":{"overlay":{"id":"114304","type":"BoxAnnotation"}},"id":"114238","type":"BoxZoomTool"},{"attributes":{},"id":"114193","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"114193","type":"BasicTicker"}},"id":"114196","type":"Grid"},{"attributes":{"text":"tau"},"id":"114270","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"114292","type":"BoxAnnotation"}},"id":"114200","type":"BoxSelectTool"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114221","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"114305","type":"BoxAnnotation"}},"id":"114240","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"114293","type":"PolyAnnotation"}},"id":"114201","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114308","type":"Selection"},"selection_policy":{"id":"114307","type":"UnionRenderers"}},"id":"114272","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114273","type":"Circle"},{"attributes":{"callback":null},"id":"114179","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114274","type":"Circle"},{"attributes":{"children":[[{"id":"114178","subtype":"Figure","type":"Plot"},0,0],[{"id":"114218","subtype":"Figure","type":"Plot"},0,1]]},"id":"114312","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"114306","type":"PolyAnnotation"}},"id":"114241","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"114272","type":"ColumnDataSource"},"glyph":{"id":"114273","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114274","type":"Circle"},"selection_glyph":null,"view":{"id":"114276","type":"CDSView"}},"id":"114275","type":"GlyphRenderer"},{"attributes":{"source":{"id":"114272","type":"ColumnDataSource"}},"id":"114276","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114277","type":"Span"},{"attributes":{},"id":"114228","type":"BasicTicker"},{"attributes":{"ticker":{"id":"114228","type":"BasicTicker"}},"id":"114231","type":"Grid"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114278","type":"Span"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114279","type":"Span"},{"attributes":{},"id":"114233","type":"BasicTicker"},{"attributes":{},"id":"114243","type":"RedoTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114280","type":"Dash"},{"attributes":{},"id":"114245","type":"SaveTool"},{"attributes":{},"id":"114244","type":"ResetTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114310","type":"Selection"},"selection_policy":{"id":"114309","type":"UnionRenderers"}},"id":"114281","type":"ColumnDataSource"},{"attributes":{},"id":"114242","type":"UndoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114295","type":"Selection"},"selection_policy":{"id":"114294","type":"UnionRenderers"}},"id":"114258","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"114281","type":"ColumnDataSource"},"glyph":{"id":"114280","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114283","type":"CDSView"}},"id":"114282","type":"GlyphRenderer"},{"attributes":{"source":{"id":"114281","type":"ColumnDataSource"}},"id":"114283","type":"CDSView"},{"attributes":{"callback":null},"id":"114246","type":"HoverTool"},{"attributes":{"text":"mu"},"id":"114284","type":"Title"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114264","type":"Span"},{"attributes":{},"id":"114287","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114265","type":"Span"},{"attributes":{"data_source":{"id":"114258","type":"ColumnDataSource"},"glyph":{"id":"114259","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114260","type":"Circle"},"selection_glyph":null,"view":{"id":"114262","type":"CDSView"}},"id":"114261","type":"GlyphRenderer"},{"attributes":{},"id":"114289","type":"BasicTickFormatter"},{"attributes":{},"id":"114204","type":"ResetTool"},{"attributes":{},"id":"114225","type":"LinearScale"},{"attributes":{"source":{"id":"114258","type":"ColumnDataSource"}},"id":"114262","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114291","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114263","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114292","type":"BoxAnnotation"},{"attributes":{},"id":"114205","type":"SaveTool"},{"attributes":{"below":[{"id":"114187","type":"LinearAxis"}],"center":[{"id":"114191","type":"Grid"},{"id":"114196","type":"Grid"}],"left":[{"id":"114192","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114261","type":"GlyphRenderer"},{"id":"114263","type":"Span"},{"id":"114264","type":"Span"},{"id":"114265","type":"Span"},{"id":"114268","type":"GlyphRenderer"}],"title":{"id":"114270","type":"Title"},"toolbar":{"id":"114207","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114179","type":"DataRange1d"},"x_scale":{"id":"114183","type":"LinearScale"},"y_range":{"id":"114181","type":"DataRange1d"},"y_scale":{"id":"114185","type":"LinearScale"}},"id":"114178","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114293","type":"PolyAnnotation"},{"attributes":{},"id":"114203","type":"RedoTool"},{"attributes":{"callback":null},"id":"114206","type":"HoverTool"},{"attributes":{},"id":"114294","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114197","type":"PanTool"},{"id":"114198","type":"BoxZoomTool"},{"id":"114199","type":"WheelZoomTool"},{"id":"114200","type":"BoxSelectTool"},{"id":"114201","type":"LassoSelectTool"},{"id":"114202","type":"UndoTool"},{"id":"114203","type":"RedoTool"},{"id":"114204","type":"ResetTool"},{"id":"114205","type":"SaveTool"},{"id":"114206","type":"HoverTool"}]},"id":"114207","type":"Toolbar"}],"root_ids":["114315"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"1ce8945f-accd-40cf-8934-a7e525077228","roots":{"114315":"1f8c9b83-1962-4399-b12d-52a4f7937089"}}];
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