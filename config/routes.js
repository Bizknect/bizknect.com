/**
 * Route Mappings
 */

module.exports.routes = {
    'get /getStarted':'SiteController.getStarted',
    'get /about':'SiteController.about',
    'get /benefits':'SiteController.benefits',
    'get /':'SiteController.index'
};
