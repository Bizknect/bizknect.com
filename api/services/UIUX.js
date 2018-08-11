/**
 *
 * @type {{set: {documentVars: Function}}}
 */

module.exports = {
  set: {
      documentVars: function(req, layout, title, navigation) {
          if(!title){
              title = 'BizKnect (SM)';
          }

          return {
              layout: '_layouts/' + layout + '.ejs',
              title: title,
              navigation: {
                  current: navigation.current,
                  subMenu: navigation.subMenu
              }
          }
      }
  }
};