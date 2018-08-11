


module.exports = {
    index: function(req, res){
        var documentVars = UIUX.set.documentVars(req, 'MAIN', '', {current: 'index', subMenu: ''});
        res.status(200); res.view('site/index', documentVars);
    },

    benefits: function(req, res){
        var documentVars = UIUX.set.documentVars(req, 'MAIN', '', {current: 'index', subMenu: ''});
        res.status(200); res.view('site/benefits', documentVars);
    },

    about: function(req, res){
        var documentVars = UIUX.set.documentVars(req, 'MAIN', '', {current: 'index', subMenu: ''});
        res.status(200); res.view('site/about', documentVars);
    },

    getStarted: function(req, res){
        var documentVars = UIUX.set.documentVars(req, 'MAIN', '', {current: 'index', subMenu: ''});
        documentVars['usStates'] = require('../../lib/usStates.json');
        res.status(200); res.view('site/getStarted', documentVars);
    }

};