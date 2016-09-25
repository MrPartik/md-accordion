'use strict';

angular
    .module('mdAccordion', [
        'ngMaterial'
    ]);

angular
    .module('mdAccordion')
    .directive('mdAccordion', ['$timeout', mdAccordion]);

function mdAccordion($timeout) {
    return {
        restrict: 'C',
        replace: false,
        link: link,
    };

    function link(scope, element, attrs) {
        element.find(".md-accordion-item-body").addClass('item-closed');
    }
}

angular
    .module('mdAccordion')
    .directive('mdAccordionItem', mdAccordionItem);

function mdAccordionItem() {
    return {
        restrict: 'E',
        link: link,
    };

    function link(scope, element, attrs) {

    }
}

angular
    .module('mdAccordion')
    .directive('mdAccordionItemHeader', ['$timeout', mdAccordionItemHeader]);

function mdAccordionItemHeader($timeout) {
    return {
        restrict: 'C',
        link: link,
    };

    function link(scope, element, attrs) {
        var isOne = element.parent().parent().attr('one');
        element.on('click', function() {
            if (isOne != undefined) {
                if (element.parent().find('.md-accordion-item-body').hasClass('item-open')) {
                    element.parent().find('.md-accordion-item-body').addClass('item-closed');
                    element.parent().find('.md-accordion-item-body').removeClass('item-open');

                } else {
                    element.parent().parent().find('.md-accordion-item-body').removeClass('item-open');
                    element.parent().parent().find('.md-accordion-item-body').addClass('item-closed');
                    $timeout(function() {
                        element.parent().find('.md-accordion-item-body').toggleClass('item-closed');
                        element.parent().find('.md-accordion-item-body').toggleClass('item-open');
                    }, 100);
                }
            } else {
                element.parent().find('.md-accordion-item-body').toggleClass('item-closed');
                element.parent().find('.md-accordion-item-body').toggleClass('item-open');
            }
        })
    }
}

angular
    .module('mdAccordion')
    .directive('mdAccordionItemBody', mdAccordionItemBody);

function mdAccordionItemBody() {
    return {
        restrict: 'C',
        link: link,
    };

    function link(scope, element, attrs) {
    }
}
