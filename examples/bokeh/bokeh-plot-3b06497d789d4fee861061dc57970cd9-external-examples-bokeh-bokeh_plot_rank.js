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
      };var element = document.getElementById("30caae36-67da-42b6-abfa-20dcce2162ae");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '30caae36-67da-42b6-abfa-20dcce2162ae' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bc697e35-b070-49f7-9079-b494ab9f6c39":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118558","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118565","type":"VBar"},{"attributes":{},"id":"118595","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118559","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118586","type":"BasicTickFormatter"},"ticker":{"id":"118553","type":"FixedTicker"}},"id":"118465","type":"LinearAxis"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118602","type":"BasicTickFormatter"},"ticker":{"id":"118581","type":"FixedTicker"}},"id":"118503","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118597","type":"Selection"},"selection_policy":{"id":"118596","type":"UnionRenderers"}},"id":"118541","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"118499","type":"BasicTicker"}},"id":"118502","type":"Grid"},{"attributes":{},"id":"118587","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"118535","type":"ColumnDataSource"}},"id":"118539","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118549","type":"VBar"},{"attributes":{"children":[{"id":"118619","type":"ToolbarBox"},{"id":"118617","type":"GridBox"}]},"id":"118620","type":"Column"},{"attributes":{},"id":"118499","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118605","type":"BoxAnnotation"},{"attributes":{},"id":"118466","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"118583","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"118466","type":"BasicTicker"}},"id":"118469","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118542","type":"VBar"},{"attributes":{},"id":"118597","type":"Selection"},{"attributes":{"toolbar":{"id":"118618","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118619","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"118563","type":"ColumnDataSource"},"glyph":{"id":"118564","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118565","type":"VBar"},"selection_glyph":null,"view":{"id":"118567","type":"CDSView"}},"id":"118566","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"118470","type":"PanTool"},{"id":"118471","type":"BoxZoomTool"},{"id":"118472","type":"WheelZoomTool"},{"id":"118473","type":"BoxSelectTool"},{"id":"118474","type":"LassoSelectTool"},{"id":"118475","type":"UndoTool"},{"id":"118476","type":"RedoTool"},{"id":"118477","type":"ResetTool"},{"id":"118478","type":"SaveTool"},{"id":"118479","type":"HoverTool"},{"id":"118508","type":"PanTool"},{"id":"118509","type":"BoxZoomTool"},{"id":"118510","type":"WheelZoomTool"},{"id":"118511","type":"BoxSelectTool"},{"id":"118512","type":"LassoSelectTool"},{"id":"118513","type":"UndoTool"},{"id":"118514","type":"RedoTool"},{"id":"118515","type":"ResetTool"},{"id":"118516","type":"SaveTool"},{"id":"118517","type":"HoverTool"}]},"id":"118618","type":"ProxyToolbar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118540","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118591","type":"PolyAnnotation"},{"attributes":{},"id":"118504","type":"BasicTicker"},{"attributes":{},"id":"118496","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118595","type":"Selection"},"selection_policy":{"id":"118594","type":"UnionRenderers"}},"id":"118535","type":"ColumnDataSource"},{"attributes":{"source":{"id":"118563","type":"ColumnDataSource"}},"id":"118567","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"118504","type":"BasicTicker"}},"id":"118507","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118537","type":"VBar"},{"attributes":{"source":{"id":"118547","type":"ColumnDataSource"}},"id":"118551","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118546","type":"Span"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118568","type":"Span"},{"attributes":{"data_source":{"id":"118535","type":"ColumnDataSource"},"glyph":{"id":"118536","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118537","type":"VBar"},"selection_glyph":null,"view":{"id":"118539","type":"CDSView"}},"id":"118538","type":"GlyphRenderer"},{"attributes":{},"id":"118494","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"118581","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118580","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118564","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118543","type":"VBar"},{"attributes":{"source":{"id":"118575","type":"ColumnDataSource"}},"id":"118579","type":"CDSView"},{"attributes":{"below":[{"id":"118460","type":"LinearAxis"}],"center":[{"id":"118464","type":"Grid"},{"id":"118469","type":"Grid"},{"id":"118534","type":"Span"},{"id":"118540","type":"Span"},{"id":"118546","type":"Span"},{"id":"118552","type":"Span"}],"left":[{"id":"118465","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118532","type":"GlyphRenderer"},{"id":"118538","type":"GlyphRenderer"},{"id":"118544","type":"GlyphRenderer"},{"id":"118550","type":"GlyphRenderer"}],"title":{"id":"118555","type":"Title"},"toolbar":{"id":"118480","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118452","type":"DataRange1d"},"x_scale":{"id":"118456","type":"LinearScale"},"y_range":{"id":"118454","type":"DataRange1d"},"y_scale":{"id":"118458","type":"LinearScale"}},"id":"118451","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"118529","type":"ColumnDataSource"}},"id":"118533","type":"CDSView"},{"attributes":{},"id":"118598","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"118591","type":"PolyAnnotation"}},"id":"118474","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"118547","type":"ColumnDataSource"},"glyph":{"id":"118548","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118549","type":"VBar"},"selection_glyph":null,"view":{"id":"118551","type":"CDSView"}},"id":"118550","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118531","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"118553","type":"FixedTicker"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118548","type":"VBar"},{"attributes":{},"id":"118596","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"118589","type":"BoxAnnotation"}},"id":"118471","type":"BoxZoomTool"},{"attributes":{},"id":"118508","type":"PanTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118536","type":"VBar"},{"attributes":{},"id":"118513","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118470","type":"PanTool"},{"id":"118471","type":"BoxZoomTool"},{"id":"118472","type":"WheelZoomTool"},{"id":"118473","type":"BoxSelectTool"},{"id":"118474","type":"LassoSelectTool"},{"id":"118475","type":"UndoTool"},{"id":"118476","type":"RedoTool"},{"id":"118477","type":"ResetTool"},{"id":"118478","type":"SaveTool"},{"id":"118479","type":"HoverTool"}]},"id":"118480","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118534","type":"Span"},{"attributes":{"callback":null},"id":"118452","type":"DataRange1d"},{"attributes":{},"id":"118470","type":"PanTool"},{"attributes":{"data_source":{"id":"118529","type":"ColumnDataSource"},"glyph":{"id":"118530","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118531","type":"VBar"},"selection_glyph":null,"view":{"id":"118533","type":"CDSView"}},"id":"118532","type":"GlyphRenderer"},{"attributes":{},"id":"118614","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118613","type":"Selection"},"selection_policy":{"id":"118612","type":"UnionRenderers"}},"id":"118569","type":"ColumnDataSource"},{"attributes":{},"id":"118609","type":"Selection"},{"attributes":{"overlay":{"id":"118605","type":"BoxAnnotation"}},"id":"118509","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118609","type":"Selection"},"selection_policy":{"id":"118608","type":"UnionRenderers"}},"id":"118557","type":"ColumnDataSource"},{"attributes":{},"id":"118610","type":"UnionRenderers"},{"attributes":{},"id":"118472","type":"WheelZoomTool"},{"attributes":{},"id":"118515","type":"ResetTool"},{"attributes":{},"id":"118594","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118570","type":"VBar"},{"attributes":{},"id":"118510","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118562","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"118590","type":"BoxAnnotation"}},"id":"118473","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"118517","type":"HoverTool"},{"attributes":{},"id":"118593","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118552","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"118606","type":"BoxAnnotation"}},"id":"118511","type":"BoxSelectTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118587","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118461","type":"BasicTicker"}},"id":"118460","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118599","type":"Selection"},"selection_policy":{"id":"118598","type":"UnionRenderers"}},"id":"118547","type":"ColumnDataSource"},{"attributes":{},"id":"118586","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118530","type":"VBar"},{"attributes":{"data_source":{"id":"118575","type":"ColumnDataSource"},"glyph":{"id":"118576","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118577","type":"VBar"},"selection_glyph":null,"view":{"id":"118579","type":"CDSView"}},"id":"118578","type":"GlyphRenderer"},{"attributes":{},"id":"118475","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"118607","type":"PolyAnnotation"}},"id":"118512","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118590","type":"BoxAnnotation"},{"attributes":{"source":{"id":"118557","type":"ColumnDataSource"}},"id":"118561","type":"CDSView"},{"attributes":{"source":{"id":"118569","type":"ColumnDataSource"}},"id":"118573","type":"CDSView"},{"attributes":{},"id":"118456","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118589","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118593","type":"Selection"},"selection_policy":{"id":"118592","type":"UnionRenderers"}},"id":"118529","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118577","type":"VBar"},{"attributes":{"children":[[{"id":"118451","subtype":"Figure","type":"Plot"},0,0],[{"id":"118491","subtype":"Figure","type":"Plot"},0,1]]},"id":"118617","type":"GridBox"},{"attributes":{"below":[{"id":"118498","type":"LinearAxis"}],"center":[{"id":"118502","type":"Grid"},{"id":"118507","type":"Grid"},{"id":"118562","type":"Span"},{"id":"118568","type":"Span"},{"id":"118574","type":"Span"},{"id":"118580","type":"Span"}],"left":[{"id":"118503","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118560","type":"GlyphRenderer"},{"id":"118566","type":"GlyphRenderer"},{"id":"118572","type":"GlyphRenderer"},{"id":"118578","type":"GlyphRenderer"}],"title":{"id":"118583","type":"Title"},"toolbar":{"id":"118518","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118452","type":"DataRange1d"},"x_scale":{"id":"118494","type":"LinearScale"},"y_range":{"id":"118454","type":"DataRange1d"},"y_scale":{"id":"118496","type":"LinearScale"}},"id":"118491","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118477","type":"ResetTool"},{"attributes":{"callback":null},"id":"118454","type":"DataRange1d"},{"attributes":{},"id":"118612","type":"UnionRenderers"},{"attributes":{},"id":"118476","type":"RedoTool"},{"attributes":{},"id":"118599","type":"Selection"},{"attributes":{},"id":"118613","type":"Selection"},{"attributes":{},"id":"118592","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"118541","type":"ColumnDataSource"},"glyph":{"id":"118542","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118543","type":"VBar"},"selection_glyph":null,"view":{"id":"118545","type":"CDSView"}},"id":"118544","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118571","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118615","type":"Selection"},"selection_policy":{"id":"118614","type":"UnionRenderers"}},"id":"118575","type":"ColumnDataSource"},{"attributes":{},"id":"118615","type":"Selection"},{"attributes":{},"id":"118611","type":"Selection"},{"attributes":{"text":"tau"},"id":"118555","type":"Title"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118611","type":"Selection"},"selection_policy":{"id":"118610","type":"UnionRenderers"}},"id":"118563","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"118479","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118508","type":"PanTool"},{"id":"118509","type":"BoxZoomTool"},{"id":"118510","type":"WheelZoomTool"},{"id":"118511","type":"BoxSelectTool"},{"id":"118512","type":"LassoSelectTool"},{"id":"118513","type":"UndoTool"},{"id":"118514","type":"RedoTool"},{"id":"118515","type":"ResetTool"},{"id":"118516","type":"SaveTool"},{"id":"118517","type":"HoverTool"}]},"id":"118518","type":"Toolbar"},{"attributes":{},"id":"118603","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"118569","type":"ColumnDataSource"},"glyph":{"id":"118570","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118571","type":"VBar"},"selection_glyph":null,"view":{"id":"118573","type":"CDSView"}},"id":"118572","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118576","type":"VBar"},{"attributes":{},"id":"118458","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118607","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"118557","type":"ColumnDataSource"},"glyph":{"id":"118558","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118559","type":"VBar"},"selection_glyph":null,"view":{"id":"118561","type":"CDSView"}},"id":"118560","type":"GlyphRenderer"},{"attributes":{},"id":"118478","type":"SaveTool"},{"attributes":{},"id":"118602","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"118541","type":"ColumnDataSource"}},"id":"118545","type":"CDSView"},{"attributes":{},"id":"118514","type":"RedoTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118603","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118499","type":"BasicTicker"}},"id":"118498","type":"LinearAxis"},{"attributes":{},"id":"118608","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118574","type":"Span"},{"attributes":{},"id":"118516","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118606","type":"BoxAnnotation"},{"attributes":{},"id":"118461","type":"BasicTicker"},{"attributes":{"ticker":{"id":"118461","type":"BasicTicker"}},"id":"118464","type":"Grid"}],"root_ids":["118620"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"bc697e35-b070-49f7-9079-b494ab9f6c39","roots":{"118620":"30caae36-67da-42b6-abfa-20dcce2162ae"}}];
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