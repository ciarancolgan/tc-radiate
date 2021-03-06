﻿var MainBuildViewModel = BaseBuild.extend({
    init: function (data) {
        this._super(data);
        var self = this;

        self.triggeredBy = ko.computed(function () {
            if(self.triggered && self.triggered.user)
                return self.triggered.user.name();
            return null;
        });

        self.issueId = ko.computed(function () {
            if(self.relatedIssues 
                && self.relatedIssues.issueUsage 
                && self.relatedIssues.issueUsage.issue)
                return self.relatedIssues.issueUsage.issue.id();
            return null;
        });
    }
});
