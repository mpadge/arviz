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
      };var element = document.getElementById("5003e518-bbfa-4c47-964f-5f139e785785");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5003e518-bbfa-4c47-964f-5f139e785785' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0ba3074d-8c7e-4aa5-82d3-07c602073d97":{"roots":{"references":[{"attributes":{"callback":null},"id":"98438","type":"HoverTool"},{"attributes":{"source":{"id":"98465","type":"ColumnDataSource"}},"id":"98469","type":"CDSView"},{"attributes":{},"id":"98420","type":"BasicTicker"},{"attributes":{},"id":"98415","type":"LinearScale"},{"attributes":{"ticker":{"id":"98420","type":"BasicTicker"}},"id":"98423","type":"Grid"},{"attributes":{},"id":"98472","type":"BasicTickFormatter"},{"attributes":{},"id":"98479","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"98413","type":"DataRange1d"},{"attributes":{"data_source":{"id":"98450","type":"ColumnDataSource"},"glyph":{"id":"98451","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98452","type":"Patch"},"selection_glyph":null,"view":{"id":"98454","type":"CDSView"}},"id":"98453","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"98472","type":"BasicTickFormatter"},"ticker":{"id":"98425","type":"BasicTicker"}},"id":"98424","type":"LinearAxis"},{"attributes":{},"id":"98474","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"98450","type":"ColumnDataSource"}},"id":"98454","type":"CDSView"},{"attributes":{"callback":null},"id":"98411","type":"DataRange1d"},{"attributes":{},"id":"98425","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Gm3TLQ911D8dlXKqE7rUPx+9EScY/9Q/IeWwoxxE1T8kDVAgIYnVPyY175wlztU/KF2OGSoT1j8rhS2WLljWPy2tzBIzndY/MNVrjzfi1j8y/QoMPCfXPzQlqohAbNc/N01JBUWx1z85deiBSfbXPzydh/5NO9g/PsUme1KA2D9A7cX3VsXYP0MVZXRbCtk/RT0E8V9P2T9HZaNtZJTZP0qNQupo2dk/TLXhZm0e2j9O3YDjcWPaP1EFIGB2qNo/Uy2/3Hrt2j9WVV5ZfzLbP1ZVXll/Mts/VlVeWX8y2z9TLb/ceu3aP1EFIGB2qNo/Tt2A43Fj2j9MteFmbR7aP0qNQupo2dk/R2WjbWSU2T9FPQTxX0/ZP0MVZXRbCtk/QO3F91bF2D8+xSZ7UoDYPzydh/5NO9g/OXXogUn21z83TUkFRbHXPzQlqohAbNc/Mv0KDDwn1z8w1WuPN+LWPy2tzBIzndY/K4Utli5Y1j8oXY4ZKhPWPyY175wlztU/JA1QICGJ1T8h5bCjHETVPx+9EScY/9Q/HZVyqhO61D8abdMtD3XUPxpt0y0PddQ/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNU9nL70wNAE1T2cvvTA0Dl5tOLxMYDQFRJOEDztANA/GfquKudA0ApR/UzlIIDQN3ZJdeqYgNAnvpHeY8/A0DbCBROaxoDQA04RUYb8wJAI1LxUvDJAkDL/dNuG6ECQEcufkyeeQJA1Zu/SFhSAkBqXdNROC0CQFn7tTBrCgJAvOakmBrrAUBbVugsyc0BQFF+KJhNswFAzqDBsmWZAUDXc0VfboIBQBRfyAVeagFA+5a0NvRQAUB+HAjdljUBQAq1DpehFwFAouNKPZD3AEBO1TeBHNUAQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"98482","type":"Selection"},"selection_policy":{"id":"98481","type":"UnionRenderers"}},"id":"98455","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98476","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"98419","type":"LinearAxis"}],"center":[{"id":"98423","type":"Grid"},{"id":"98428","type":"Grid"}],"left":[{"id":"98424","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98453","type":"GlyphRenderer"},{"id":"98458","type":"GlyphRenderer"},{"id":"98463","type":"GlyphRenderer"},{"id":"98468","type":"GlyphRenderer"}],"title":{"id":"98471","type":"Title"},"toolbar":{"id":"98439","type":"Toolbar"},"x_range":{"id":"98411","type":"DataRange1d"},"x_scale":{"id":"98415","type":"LinearScale"},"y_range":{"id":"98413","type":"DataRange1d"},"y_scale":{"id":"98417","type":"LinearScale"}},"id":"98410","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"98425","type":"BasicTicker"}},"id":"98428","type":"Grid"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98456","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98477","type":"BoxAnnotation"},{"attributes":{},"id":"98481","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98452","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98457","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98478","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98451","type":"Patch"},{"attributes":{"data_source":{"id":"98455","type":"ColumnDataSource"},"glyph":{"id":"98456","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98457","type":"Patch"},"selection_glyph":null,"view":{"id":"98459","type":"CDSView"}},"id":"98458","type":"GlyphRenderer"},{"attributes":{},"id":"98482","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"RcfnpFFdmT9rR9puma2dP8hjZpzw/qA/3KNfgRQnoz/u41hmOE+lPwIkUktcd6c/FGRLMICfqT8opEQVpMerPzrkPfrH760/J5Kb7/ULsD8wMhjiByCxPzrSlNQZNLI/Q3IRxytIsz9NEo65PVy0P1ayCqxPcLU/X1KHnmGEtj9p8gORc5i3P3OSgIOFrLg/fDL9dZfAuT+F0nloqdS6P49y9lq76Ls/mRJzTc38vD+isu8/3xC+P6tSbDLxJL8/W3l0koEcwD9gybKLiqbAP2QZ8YSTMME/aWkvfpy6wT9uuW13pUTCP3MJrHCuzsI/d1nqabdYwz98qShjwOLDP4H5ZlzJbMQ/hkmlVdL2xD+LmeNO24DFP4/pIUjkCsY/lDlgQe2Uxj+ZiZ469h7HP53Z3DP/qMc/oikbLQgzyD+neVkmEb3IP6zJlx8aR8k/sRnWGCPRyT+1aRQSLFvKP7q5Ugs15co/vwmRBD5vyz/DWc/9RvnLP8ipDfdPg8w/zflL8FgNzT/SSYrpYZfNP9eZyOJqIc4/2+kG3HOrzj/gOUXVfDXPP+WJg86Fv88/9OzgY8ck0D/3FIDgy2nQP/k8H13QrtA//GS+2dTz0D/+jF1W2TjRPwC1/NLdfdE/At2bT+LC0T8FBTvM5gfSPwct2kjrTNI/ClV5xe+R0j8MfRhC9NbSPw6lt774G9M/Ec1WO/1g0z8T9fW3AabTPxYdlTQG69M/GEU0sQow1D8YRTSxCjDUPxhFNLEKMNQ/Fh2VNAbr0z8T9fW3AabTPxHNVjv9YNM/DqW3vvgb0z8MfRhC9NbSPwpVecXvkdI/By3aSOtM0j8FBTvM5gfSPwLdm0/iwtE/ALX80t190T/+jF1W2TjRP/xkvtnU89A/+TwfXdCu0D/3FIDgy2nQP/Ts4GPHJNA/5YmDzoW/zz/gOUXVfDXPP9vpBtxzq84/15nI4mohzj/SSYrpYZfNP835S/BYDc0/yKkN90+DzD/DWc/9RvnLP78JkQQ+b8s/urlSCzXlyj+1aRQSLFvKP7EZ1hgj0ck/rMmXHxpHyT+neVkmEb3IP6IpGy0IM8g/ndncM/+oxz+ZiZ469h7HP5Q5YEHtlMY/j+khSOQKxj+LmeNO24DFP4ZJpVXS9sQ/gflmXMlsxD98qShjwOLDP3dZ6mm3WMM/cwmscK7Owj9uuW13pUTCP2lpL36cusE/ZBnxhJMwwT9gybKLiqbAP1t5dJKBHMA/q1JsMvEkvz+isu8/3xC+P5kSc03N/Lw/j3L2Wrvouz+F0nloqdS6P3wy/XWXwLk/c5KAg4WsuD9p8gORc5i3P19Sh55hhLY/VrIKrE9wtT9NEo65PVy0P0NyEccrSLM/OtKU1Bk0sj8wMhjiByCxPyeSm+/1C7A/OuQ9+sfvrT8opEQVpMerPxRkSzCAn6k/AiRSS1x3pz/u41hmOE+lP9yjX4EUJ6M/yGNmnPD+oD9rR9puma2dP0XH56RRXZk/RcfnpFFdmT8=","dtype":"float64","shape":[142]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZoCaIpq0AQNmgJoimrQBAFcxpnHKAAEAZ8/pYo1AAQKkcqbfXGwBA/oAj2tzC/z81e/xscEX/P8/toJD5v/4/NSGyipkv/j8mLtaqCJX9P5LcnhkJ8fw/dMopsvVD/D+WO6/akI77PzMkN5T9zvo/g60T/6wI+j8UPA8OtTv5P8k3QaXIaPg/nOPhjN2S9z94cVufIrn2P9pWpQuJ3PU/mdCUKPwA9T/O6UsfliX0P4scaI3MSvM/um7vUBR38j/r92Q0nqTxP4nZxfJ71/A/paxrO4kQ8D+PRSuR4JvuP4xWkULFH+0/dsUTZJiw6z95Hp/y+UzqP+WZZRAm9eg/oNFC/JKt5z8IR6Q9wHXmP7cfDm1HRuU/ZwM4TLAk5D9mOLercRfjP4tqWIfCF+I/Oz4aJFkq4T9GHR0qIUjgP6Bf2WHQ5t4/iKzGWA9X3T+nPGny6eDbP75NE2ttg9o/a4jDPpNA2T/gkKknnQvYPzUdS8eb59Y/pcGJ4EPO1T/QrXCoqL3UP3haYG9vtdM/DKqB5PC70j+flDCHhcXRP/tbXoPFzdA/SRxEuqy3zz8OtIuBaNvNP2j+rbLgAsw/wZtj0sEpyj/tv4h3g17IP0lJPtNRmMY/LCaQjpjkxD9O3dXgYkjDP9DV6Xi6wsE/V3JBC/1TwD9OAZp9Jg2+P05od+BDq7s/nJAiEr+UuT+ZKLng1eG3P5Bcy/QLjbY/GCVjBKGZtT/Vq2RBnfu0P4+QKONRzrQ/AAAAAAAAAAA=","dtype":"float64","shape":[142]}},"selected":{"id":"98480","type":"Selection"},"selection_policy":{"id":"98479","type":"UnionRenderers"}},"id":"98450","type":"ColumnDataSource"},{"attributes":{"source":{"id":"98455","type":"ColumnDataSource"}},"id":"98459","type":"CDSView"},{"attributes":{},"id":"98483","type":"UnionRenderers"},{"attributes":{"text":""},"id":"98471","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98429","type":"PanTool"},{"id":"98430","type":"BoxZoomTool"},{"id":"98431","type":"WheelZoomTool"},{"id":"98432","type":"BoxSelectTool"},{"id":"98433","type":"LassoSelectTool"},{"id":"98434","type":"UndoTool"},{"id":"98435","type":"RedoTool"},{"id":"98436","type":"ResetTool"},{"id":"98437","type":"SaveTool"},{"id":"98438","type":"HoverTool"}]},"id":"98439","type":"Toolbar"},{"attributes":{"formatter":{"id":"98474","type":"BasicTickFormatter"},"ticker":{"id":"98420","type":"BasicTicker"}},"id":"98419","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"WH391YN32z9apZxSiLzbP13NO8+MAdw/X/XaS5FG3D9iHXrIlYvcP2RFGUWa0Nw/Zm24wZ4V3T9plVc+o1rdP2u99rqnn90/beWVN6zk3T9wDTW0sCneP3I11DC1bt4/dF1zrbmz3j93hRIqvvjeP3mtsabCPd8/fNVQI8eC3z9+/e+fy8ffP8CSRw5oBuA/wiaXTOoo4D/DuuaKbEvgP8RONsnubeA/xeKFB3GQ4D/GdtVF87LgP8cKJYR11eA/yJ50wvf34D/KMsQAehrhP8oyxAB6GuE/yjLEAHoa4T/InnTC9/fgP8cKJYR11eA/xnbVRfOy4D/F4oUHcZDgP8RONsnubeA/w7rmimxL4D/CJpdM6ijgP8CSRw5oBuA/fv3vn8vH3z981VAjx4LfP3mtsabCPd8/d4USKr743j90XXOtubPeP3I11DC1bt4/cA01tLAp3j9t5ZU3rOTdP2u99rqnn90/aZVXPqNa3T9mbbjBnhXdP2RFGUWa0Nw/Yh16yJWL3D9f9dpLkUbcP13NO8+MAdw/WqWcUoi82z9Yff3Vg3fbP1h9/dWDd9s/","dtype":"float64","shape":[54]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKmT0Oq8cP4/qZPQ6rxw/j/3xGhLCRX/P2zrBvoXuv8/ir0wQc8vAEAvLNVu6YMAQBmTIEgY1gBAszqT5vQlAUBQToYPUHUBQDYst06NwAFAb9qnO64GAkAjHi7Me0gCQNbCkNGFhgJAmgpV0uy+AkBnyZtis/ICQAldtVeKHwNAsbFwG7dIA0CYh+h+RmwDQPXLgFEvigNAJd0TBoOjA0Cno/rfq7gDQPv2jn2wyANAwVzkmqPUA0D4CvAu/tsDQEe0Ib8W4ANAfq2RawLhA0C2LBz4NtwDQAAAAAAAAAAA","dtype":"float64","shape":[54]}},"selected":{"id":"98484","type":"Selection"},"selection_policy":{"id":"98483","type":"UnionRenderers"}},"id":"98460","type":"ColumnDataSource"},{"attributes":{},"id":"98429","type":"PanTool"},{"attributes":{},"id":"98484","type":"Selection"},{"attributes":{},"id":"98485","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98461","type":"Patch"},{"attributes":{"overlay":{"id":"98476","type":"BoxAnnotation"}},"id":"98430","type":"BoxZoomTool"},{"attributes":{},"id":"98486","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98462","type":"Patch"},{"attributes":{},"id":"98431","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"98460","type":"ColumnDataSource"},"glyph":{"id":"98461","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98462","type":"Patch"},"selection_glyph":null,"view":{"id":"98464","type":"CDSView"}},"id":"98463","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"98477","type":"BoxAnnotation"}},"id":"98432","type":"BoxSelectTool"},{"attributes":{"source":{"id":"98460","type":"ColumnDataSource"}},"id":"98464","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"98478","type":"PolyAnnotation"}},"id":"98433","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"y8YTP/w84T/MWmN9fl/hP83usrsAguE/zoIC+oKk4T/QFlI4BcfhP9GqoXaH6eE/0j7xtAkM4j/T0kDziy7iP9RmkDEOUeI/1vrfb5Bz4j/Xji+uEpbiP9gif+yUuOI/2bbOKhfb4j/aSh5pmf3iP9zebacbIOM/3XK95Z1C4z/eBg0kIGXjP9+aXGKih+M/4C6soCSq4z/hwvvepszjP+NWSx0p7+M/5OqaW6sR5D/lfuqZLTTkP+YSOtivVuQ/56aJFjJ55D/pOtlUtJvkP+rOKJM2vuQ/62J40bjg5D/s9scPOwPlP+2KF069JeU/7h5njD9I5T/wsrbKwWrlP/FGBglEjeU/8tpVR8av5T/zbqWFSNLlP/QC9cPK9OU/9pZEAk0X5j/3KpRAzznmP/i+435RXOY/+VIzvdN+5j/65oL7VaHmP/x60jnYw+Y//Q4ieFrm5j/+onG23AjnP/82wfReK+c/AMsQM+FN5z8CX2BxY3DnPwPzr6/lkuc/BIf/7We15z8FG08s6tfnPwavnmps+uc/B0PuqO4c6D8J1z3ncD/oPwprjSXzYeg/C//cY3WE6D8Mkyyi96boPw0nfOB5yeg/D7vLHvzr6D8QTxtdfg7pPxHjapsAMek/Ene62YJT6T8TCwoYBXbpPxSfWVaHmOk/FjOplAm76T8Xx/jSi93pPxhbSBEOAOo/Ge+XT5Ai6j8ag+eNEkXqPxwXN8yUZ+o/HauGCheK6j8eP9ZImazqPx/TJYcbz+o/IGd1xZ3x6j8i+8QDIBTrPyOPFEKiNus/JCNkgCRZ6z8lt7O+pnvrPyW3s76me+s/JbezvqZ76z8kI2SAJFnrPyOPFEKiNus/IvvEAyAU6z8gZ3XFnfHqPx/TJYcbz+o/Hj/WSJms6j8dq4YKF4rqPxwXN8yUZ+o/GoPnjRJF6j8Z75dPkCLqPxhbSBEOAOo/F8f40ovd6T8WM6mUCbvpPxSfWVaHmOk/EwsKGAV26T8Sd7rZglPpPxHjapsAMek/EE8bXX4O6T8Pu8se/OvoPw0nfOB5yeg/DJMsovem6D8L/9xjdYToPwprjSXzYeg/Cdc953A/6D8HQ+6o7hzoPwavnmps+uc/BRtPLOrX5z8Eh//tZ7XnPwPzr6/lkuc/Al9gcWNw5z8AyxAz4U3nP/82wfReK+c//qJxttwI5z/9DiJ4WubmP/x60jnYw+Y/+uaC+1Wh5j/5UjO9037mP/i+435RXOY/9yqUQM855j/2lkQCTRfmP/QC9cPK9OU/826lhUjS5T/y2lVHxq/lP/FGBglEjeU/8LK2ysFq5T/uHmeMP0jlP+2KF069JeU/7PbHDzsD5T/rYnjRuODkP+rOKJM2vuQ/6TrZVLSb5D/npokWMnnkP+YSOtivVuQ/5X7qmS005D/k6ppbqxHkP+NWSx0p7+M/4cL73qbM4z/gLqygJKrjP9+aXGKih+M/3gYNJCBl4z/dcr3lnULjP9zebacbIOM/2koeaZn94j/Zts4qF9viP9gif+yUuOI/144vrhKW4j/W+t9vkHPiP9RmkDEOUeI/09JA84su4j/SPvG0CQziP9GqoXaH6eE/0BZSOAXH4T/OggL6gqThP83usrsAguE/zFpjfX5f4T/LxhM//DzhP8vGEz/8POE/","dtype":"float64","shape":[156]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZl8yWJSMQ/9mXzJYlIxD8zfMh19FnEPzqf01F9gMQ/FWdpo2e3xD+2NhZrl/LEPwjOeaMKN8U/wqxJaQqExT91d6FBTOHFP3nVve5iT8Y/Lq2ISwXRxj/syg2XamfHP5MxbHecEMg/1aLOET7SyD+YCXAp2rTJP+8Mn7gYvMo/gydjuq7gyz+O8TbqYSzNPyTcPnVrqc4/CV2rU6cp0D9KO16m9QnRPznCFNv399E/77c3syz70j+TPkTnXQzUPzS0XfrQKtU/YIFPN79X1j+LpVDQTY3XPxDP1bVW19g/oPRAoR0h2j/ozCOpcnrbP/pdyj8R4dw/lkTgt81U3j97svQGSdTfP2ktrAhYsuA/U2HiW2WB4T/wyE3RMlviPy61d/3lN+M/PQXtfpsb5D97n9VguQflPzP7nQBE+eU/bU6Yy6nr5j/VrvTEQt/nPxdaOYeMzug/k4S/u7O+6T97TZS+wqbqP0Wy7PYfhus/KUdDki5f7D8FE7R0Ry/tP6BnAtLY9+0/NVuFmGu87j/j9PafnH/vP3NyhQdcIfA/xhnVtGGD8D+QL6EEOenwP3aU6SMjU/E/SbueyUfC8T/9/5cJHzfyP3ddnMbpsfI/QJBdFvsz8z+nvfKMELvzPysYNiGJSPQ/1C+JWUra9D8XuM7IAm71Pw9bbMg1AvY/ypS7i/+T9j/64p+qoyX3P75nsN3stPc/zrp4y6lB+D9vGj0ezMz4PwgxwmrbVvk/NX7fztre+T8oes/sGmf6P5qPWajS7/o/RY5fANJ9+z/YCL/uPgv8P8LPZAcjnfw/6AP0BWMy/T9nu2qcL8/9PwAAAAAAAAAA","dtype":"float64","shape":[156]}},"selected":{"id":"98486","type":"Selection"},"selection_policy":{"id":"98485","type":"UnionRenderers"}},"id":"98465","type":"ColumnDataSource"},{"attributes":{},"id":"98434","type":"UndoTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98466","type":"Patch"},{"attributes":{},"id":"98435","type":"RedoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98467","type":"Patch"},{"attributes":{},"id":"98436","type":"ResetTool"},{"attributes":{"data_source":{"id":"98465","type":"ColumnDataSource"},"glyph":{"id":"98466","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98467","type":"Patch"},"selection_glyph":null,"view":{"id":"98469","type":"CDSView"}},"id":"98468","type":"GlyphRenderer"},{"attributes":{},"id":"98437","type":"SaveTool"},{"attributes":{},"id":"98417","type":"LinearScale"},{"attributes":{},"id":"98480","type":"Selection"}],"root_ids":["98410"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"0ba3074d-8c7e-4aa5-82d3-07c602073d97","roots":{"98410":"5003e518-bbfa-4c47-964f-5f139e785785"}}];
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