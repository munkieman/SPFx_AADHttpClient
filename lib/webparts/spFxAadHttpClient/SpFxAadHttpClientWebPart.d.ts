import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpFxAadHttpClientWebPartProps {
    description: string;
}
export default class SpFxAadHttpClientWebPart extends BaseClientSideWebPart<ISpFxAadHttpClientWebPartProps> {
    render(): void;
    private _getUsers;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpFxAadHttpClientWebPart.d.ts.map