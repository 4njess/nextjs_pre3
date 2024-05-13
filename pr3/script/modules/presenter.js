export class Presenter {

    SimpleTemplate = Handlebars.compile(`
                                      <div>
                                        <p>GisConfig: {{GisConfig}}</p>
                                        <p>Id: {{Id}}</p>
                                        <p>ProductType: {{ProductType}}</p>
                                        <p>RevNum: {{RevNum}}</p>
                                        <p>SenderId: {{SenderId}}</p>
                                        <p>ServerVersion: {{ServerVersion}}</p>
                                        <p>Timestamp: {{Timestamp}}</p>
                                        {{#if value}}
                                            <p>UseTimeZones: <span class="greenText">{{UseTimeZones}}</span></p>
                                            {{else}}
                                            <p>UseTimeZones: <span class="redText">{{UseTimeZones}}</span></p>
                                        {{/if}}
                                        <p>WorldMapConfig: {{WorldMapConfig}}</p>
                                        <p>XmlProtocolVersion: {{XmlProtocolVersion}}</p>
                                      </div>`)
    MDCTemplate = Handlebars.compile(`
                                      <div>
                                      <h4>MobileDevicesCapabilities:</h4>
                                      <div class="values">
                                          <p>AndroidMobilePush: {{MobileDevicesCapabilities.AndroidMobilePush}}<p>
                                          <p>AppleMobilePush: {{MobileDevicesCapabilities.AppleMobilePush}}<p>
                                          <p>Archive: {{MobileDevicesCapabilities.Archive}}<p>
                                          <p>Gis: {{MobileDevicesCapabilities.Gis}}<p>
                                          <p>Hls: {{MobileDevicesCapabilities.Hls}}<p>
                                          <p>Profiles: {{MobileDevicesCapabilities.Profiles}}<p>
                                          <p>Ptz: {{MobileDevicesCapabilities.Ptz}}<p>
                                          <p>SmartAssistant: {{MobileDevicesCapabilities.SmartAssistant}}<p>
                                          <p>UserScenarios: {{MobileDevicesCapabilities.UserScenarios}}<p>
                                          <p>AndroidMobilePush: {{MobileDevicesCapabilities.AndroidMobilePush}}<p>
                                          <p>AppleMobilePush: {{MobileDevicesCapabilities.AppleMobilePush}}<p>
                                          <p>Archive: {{MobileDevicesCapabilities.Archive}}<p>
                                          <p>Gis: {{MobileDevicesCapabilities.Gis}}<p>
                                          <p>Hls: {{MobileDevicesCapabilities.Hls}}<p>
                                          <p>Profiles: {{MobileDevicesCapabilities.Profiles}}<p>
                                          <p>Ptz: {{MobileDevicesCapabilities.Ptz}}<p>
                                          <p>SmartAssistant: {{MobileDevicesCapabilities.SmartAssistant}}<p>
                                          <p>UserScenarios: {{MobileDevicesCapabilities.UserScenarios}}<p>
                                      </div>
                                      </div>`)
    ChannelsTemplate = Handlebars.compile(`
                                        <div>
                                        <details class="ArrDetails">
                                        <summary  class="ArrHeader"><h4>[Channels]:</h4></summary>
                                        <div class="valuesM">
                                        {{#each Channels}}
                                          <p>{{@key}}:</p>
                                          <div class="values">
                                            <p>AllowedArchive: {{AllowedArchive}}</p>
                                            <p>AllowedRealtime: {{AllowedRealtime}}</p>
                                            <p>ArchiveMode: {{ArchiveMode}}</p>
                                            <p>ArchiveRotationMode: {{ArchiveRotationMode}}</p>
                                            <p>ArchiveStreamType: {{ArchiveStreamType}}</p>
                                            <p>ArchiveVideoFormat: {{ArchiveVideoFormat}}</p>
                                            <p>AttachedToServer: {{AttachedToServer}}</p>
                                            <p>Description: {{Description}}</p>
                                            <p>DeviceInfo: {{DeviceInfo}}</p>
                                            <p>GeoPosition: {{GeoPosition}}</p>
                                            <p>Id: {{Id}}</p>
                                            <p>IsArchivingEnabled: {{IsArchivingEnabled}}</p>
                                            <p>IsDisabled: {{IsDisabled}}</p>
                                            <p>IsFaceRecOn: {{IsFaceRecOn}}</p>
                                            <p>IsObjectCountingOn: {{IsObjectCountingOn}}</p>
                                            <p>IsPeopleCountingOn: {{IsPeopleCountingOn}}</p>
                                            <p>IsPtzOn: {{IsPtzOn}}</p>
                                            <p>IsSoundArchivingEnabled: {{IsSoundArchivingEnabled}}</p>
                                            <p>IsSoundOn: {{IsSoundOn}}</p>
                                            <p>IsTransmitSoundOn: {{IsTransmitSoundOn}}</p>
                                            <p>Name: {{Name}}</p>
                                              <details class="ArrDetails">
                                                <summary class="ArrHeader"><p>[Streams]:</p></summary>
                                                <div class="valuesM">
                                                  {{#each Streams}}
                                                  <p>{{@key}}:</p>
                                                  <div class="values">
                                                  <p>RotationMode: {{RotationMode}}</p>
                                                  <p>StreamFormat: {{StreamFormat}}</p>
                                                  <p>StreamType: {{StreamType}}</p>
                                                  </div>
                                                  {{/each}}
                                                </div>
                                              </details>
                                            <p>TimeZoneOffset: {{TimeZoneOffset}}</p>
                                              <details class="ArrDetails">
                                              <summary class="ArrHeader"><p>[UserScenarios]:</p></summary>
                                              <div class="valuesM">
                                                {{#each UserScenarios}}
                                                <p>{{@key}}:</p>
                                                {{/each}}
                                              </div>
                                            </details>
                                          </div>
                                        {{/each}}
                                        </div>
                                        </details>
                                      </div>`)
    MSI_Template = Handlebars.compile(`
                                      <div>
                                        <h4>MobileServerInfo:</h4>
                                        <div class="values"> 
                                        <p>FpsLimit: {{MobileServerInfo.FpsLimit}}<p>
                                        <p>HighResolution: {{MobileServerInfo.HighResolution}}<p>
                                        <p>IsEnabled: {{MobileServerInfo.IsEnabled}}<p>
                                        <p>IsMobilePushEnabled: {{MobileServerInfo.IsMobilePushEnabled}}<p>
                                        <p>IsProxyEnabled: {{MobileServerInfo.IsProxyEnabled}}<p>
                                        <p>LowResolution: {{MobileServerInfo.LowResolution}}<p>
                                        <p>MiddleResolution: {{MobileServerInfo.MiddleResolution}}<p>
                                        <details class="ArrDetails">
                                        <summary class="ArrHeader"><p>[Resolutions]:</p></summary> 
                                        <div class="valuesM">
                                        {{#each MobileServerInfo.Resolutions}}
                                        <p>{{@key}}:</p>
                                        <div class="values">
                                          <p>FpsLimit: {{FpsLimit}}</p>
                                          <p>Height: {{Height}}</p>
                                          <p>IsEnabled: {{IsEnabled}}</p>
                                          <p>Type: {{Type}}</p>
                                          <p>UsePFrames: {{UsePFrames}}</p>
                                          <p>Width: {{Width}}</p>
                                        </div>
                                        {{/each}}
                                        </div>
                                        </details>
                                        <p>UsePFrames: {{MobileServerInfo.UsePFrames}}<p>
                                        </div>
                                      </div>`)
    RSO_Template = Handlebars.compile(`
                                      <div>
                                      <h4>RootSecObject: </h4>
                                      <div class="values">
                                            <details class="ArrDetails">
                                            <summary class="ArrHeader"><p>[ChildChannels]:</p></summary>
                                            <div class="valuesM">
                                              {{#each RootSecObject.ChildChannels}}
                                              <p>{{@key}}:</p>
                                              {{/each}}
                                            </div>
                                          </details>
                                          <details class="ArrDetails">
                                          <summary class="ArrHeader"><p>[ChildSecObjects]:</p></summary>
                                          <div class="valuesM">
                                            {{#each RootSecObject.ChildSecObjects}}
                                            <p>{{@key}}:</p>
                                            <div class="values">
                                                <details class="ArrDetails">
                                                <summary class="ArrHeader"><p>[ChildChannels]:</p></summary>
                                                <div class="valuesM">
                                                  {{#each ChildChannels}}
                                                    <p>{{@key}}: {{this}}</p>
                                                      <div class="values">
                                                      {{#each ../Channels}}
                                                        <p>Id: {{this}}<p>
                                                      {{/each}}
                                                      </div>                 
                                                  {{/each}}
                                                </div>
                                                </details>
                                                <details class="ArrDetails">
                                                <summary class="ArrHeader"><p>[ChildSecObjects]:</p></summary>
                                                <div class="valuesM">
                                                  {{#each ChildSecObjects}}
                                                  <p>{{@key}}:</p>
                                                  {{/each}}
                                                </div>
                                                </details>
                                            <p>Id: {{Id}}</p>
                                            <p>Name: {{Name}}</p>
                                            </div>
                                            {{/each}}
                                          </div>
                                          </details>
                                      <p>Id: {{RootSecObject.Id}}</p>
                                      <p>Name: {{RootSecObject.Name}}</p>
                                      </div>
                                      </div>`)
    RSI_Template = Handlebars.compile(`
                                      <div>
                                      <h4>RtspServerInfo: </h4>
                                      <div class="values">
                                      <p>IsEnabled: {{RtspServerInfo.IsEnabled}}<p>
                                      <p>IsMjpegEnabled: {{RtspServerInfo.IsMjpegEnabled}}<p>
                                      <p>TcpPort: {{RtspServerInfo.TcpPort}}<p>
                                      </div>
                                      </div>`)
    Servers_Template = Handlebars.compile(`
                                        <div>
                                        <details class="ArrDetails">
                                        <summary class="ArrHeader"><h4>[Servers]:</h4></summary>
                                        <div class="valuesM">
                                          {{#each Servers}}
                                          <p>{{@key}}:</p>
                                          <div class="values">
                                            <p>ConnectionUrl: {{ConnectionUrl}}</p>
                                            <p>Id: {{Id}}</p>
                                            <p>Name: {{Name}}</p>
                                            <p>PrimaryIp: {{PrimaryIp}}</p>
                                            <p>PrimaryPort: {{PrimaryPort}}</p>
                                            <p>PrimarySslPort: {{PrimarySslPort}}</p>
                                            <p>SecondaryIp: {{SecondaryIp}}</p>
                                            <p>SecondaryPort: {{SecondaryPort}}</p>
                                            <p>SecondarySslPort: {{SecondarySslPort}}</p>
                                            <p>Url: {{Url}}</p>
                                          </div>
                                            {{/each}}
                                        </div>
                                        </details>
                                        </div>
                                          `)
  UserGroup_Template = Handlebars.compile(`
                                          <div>
                                          <h4>UserGroup: </h4>
                                          <div class="values">
                                          <p>CanAccessArchiveMarks: {{UserGroup.CanAccessArchiveMarks}}<p>
                                          <p>CanAccessEditingAnalystPluginsInClient: {{UserGroup.CanAccessEditingAnalystPluginsInClient}}<p>
                                          <p>CanAccessExpertMode: {{UserGroup.CanAccessExpertMode}}<p>
                                          <p>CanAccessGis: {{UserGroup.CanAccessGis}}<p>
                                          <p>CanAccessNewCamera: {{UserGroup.CanAccessNewCamera}}<p>
                                          <p>CanAccessPlans: {{UserGroup.CanAccessPlans}}<p>
                                          <p>CanAccessReports: {{UserGroup.CanAccessReports}}<p>
                                          <p>CanAccessSearch: {{UserGroup.CanAccessSearch}}<p>
                                          <p>CanAccessToAllUsersInUnifiedLog: {{UserGroup.CanAccessToAllUsersInUnifiedLog}}<p>
                                          <p>CanAccessUnifiedLog: {{UserGroup.CanAccessUnifiedLog}}<p>
                                          <p>CanAccessVideoViaSmartTV: {{UserGroup.CanAccessVideoViaSmartTV}}<p>
                                          <p>CanAccessVideoViaWeb: {{UserGroup.CanAccessVideoViaWeb}}<p>
                                          <p>CanBrowsingVideowall: {{UserGroup.CanBrowsingVideowall}}<p>
                                          <p>CanChangeChannelMode: {{UserGroup.CanChangeChannelMode}}<p>
                                          <p>CanChangePassword: {{UserGroup.CanChangePassword}}<p>
                                          <p>CanConfigure: {{UserGroup.CanConfigure}}<p>
                                          <p>CanConfigureVideowall: {{UserGroup.CanConfigureVideowall}}<p>
                                          <p>CanConfigureWorkplace: {{UserGroup.CanConfigureWorkplace}}<p>
                                          <p>CanExportVideoToAvi: {{UserGroup.CanExportVideoToAvi}}<p>
                                          <p>CanGetTranscodedVideoFromMobileServer: {{UserGroup.CanGetTranscodedVideoFromMobileServer}}<p>
                                          <p>CanManageRec: {{UserGroup.CanManageRec}}<p>
                                          <p>CanPTZ: {{UserGroup.CanPTZ}}<p>
                                          <p>CanReceiveMainStream: {{UserGroup.CanReceiveMainStream}}<p>
                                          <p>CanReceiveMobilePush: {{UserGroup.CanReceiveMobilePush}}<p>
                                          <p>CanReceiveSound: {{UserGroup.CanReceiveSound}}<p>
                                          <p>CanRunUserScenarios: {{UserGroup.CanRunUserScenarios}}<p>
                                          <p>CanShutdown: {{UserGroup.CanShutdown}}<p>
                                          <p>CanTransmitSound: {{UserGroup.CanTransmitSound}}<p>
                                          <p>CanUseArchiveExport: {{UserGroup.CanUseArchiveExport}}<p>
                                          <p>Comment: {{UserGroup.Comment}}<p>
                                              <details class="ArrDetails">
                                              <summary class="ArrHeader"><p>[GridTypesAllowed]:</p></summary>
                                              <div class="valuesM">
                                                {{#each UserGroup.GridTypesAllowed}}
                                                <p>{{@key}}: GridType{{@key}}</p>
                                                {{/each}}
                                              </div>
                                            </details>
                                          <p>Id: {{UserGroup.Id}}<p>
                                          <p>IsAllForbidden: {{UserGroup.IsAllForbidden}}<p>
                                          <p>MessengerCanReceiveMessages: {{UserGroup.MessengerCanReceiveMessages}}<p>
                                          <p>MessengerCanSendMessages: {{UserGroup.MessengerCanSendMessages}}<p>
                                          <p>Name: {{UserGroup.Name}}<p>
                                          <p>PtzPriority: {{UserGroup.PtzPriority}}<p>
                                          </div>
                                          </div>`)
//Channels,((MobileDevicesCapabilities)),MobileServerInfo,RootSecObject,((RtspServerInfo)),Servers,UserGroup
}