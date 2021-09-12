var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SpFxAadHttpClientWebPartStrings';
import SpFxAadHttpClient from './components/SpFxAadHttpClient';
import { AadHttpClient } from '@microsoft/sp-http';
var SpFxAadHttpClientWebPart = /** @class */ (function (_super) {
    __extends(SpFxAadHttpClientWebPart, _super);
    function SpFxAadHttpClientWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpFxAadHttpClientWebPart.prototype.render = function () {
        var _this = this;
        if (!this.renderedOnce) {
            this._getUsers()
                .then(function (results) {
                var element = React.createElement(SpFxAadHttpClient, {
                    userItems: results
                });
                ReactDom.render(element, _this.domElement);
            });
        }
    };
    SpFxAadHttpClientWebPart.prototype._getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.aadHttpClientFactory
                .getClient('https://graph.microsoft.com')
                .then(function (aadClient) {
                var endpoint = 'https://graph.microsoft.com/v1.0/users?$top=10&$select=id,displayName,mail';
                aadClient.get(endpoint, AadHttpClient.configurations.v1)
                    .then(function (rawResponse) {
                    return rawResponse.json();
                })
                    .then(function (jsonResponse) {
                    resolve(jsonResponse.value);
                });
            });
        });
    };
    SpFxAadHttpClientWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SpFxAadHttpClientWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpFxAadHttpClientWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpFxAadHttpClientWebPart;
}(BaseClientSideWebPart));
export default SpFxAadHttpClientWebPart;
//# sourceMappingURL=SpFxAadHttpClientWebPart.js.map