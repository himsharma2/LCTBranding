using System;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Security;
using Microsoft.SharePoint.Administration;
using System.Collections.Generic;
using Gilead.SP.LCT.Branding;

namespace Gilead.SP.LCT.Branding.Features.LCTCustomBranding
{
    /// <summary>
    /// This class handles events raised during feature activation, deactivation, installation, uninstallation, and upgrade.
    /// </summary>
    /// <remarks>
    /// The GUID attached to this class may be used during packaging and should not be modified.
    /// </remarks>

    [Guid("2239ea95-4042-401d-bde2-eded5c8651ca")]
    public class LCTCustomBrandingEventReceiver : SPFeatureReceiver
    {
        // Uncomment the method below to handle the event raised after a feature has been activated.

        public override void FeatureActivated(SPFeatureReceiverProperties properties)
        {
            try
            {

                SPSite curSite = (SPSite)properties.Feature.Parent;
                using (SPWeb curWeb = curSite.OpenWeb())
                {
                    // Provide Variable to keep the Hardcoded Value
                    // Check Gilead Class file for Constant 
                    string filename = StringStore.NewMasterPageFileName;
                    string TempURL = StringStore.TempURL;
                    //create full Master page URL
                    Uri masterUri = new Uri(curWeb.Url + TempURL + filename);
                    //Master page used by all forms and pages on the site that are not publishing pages
                    curWeb.MasterUrl = masterUri.AbsolutePath;
                    curWeb.CustomMasterUrl = masterUri.AbsolutePath;
                    curWeb.Update();
                }

            }
            catch (Exception ex)
            {
                ULSLogger.LogErrorInULS("Error occured while Activating the feature." + ex.Message, TraceSeverity.High);
            }
        }


        // Uncomment the method below to handle the event raised before a feature is deactivated.

        public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
        {
            try
            {
                //get all Module's Element.xml file details associated to the LCT Custom Branding feature
                List<ModuleInfo> moduleInfoCollection = FeaturesHelper.GetModuleFilesInfo(properties);

                SPSite curSite = (SPSite)properties.Feature.Parent;
                using (SPWeb curWeb = curSite.OpenWeb())
                {
                    //foreach Module associated to LCT Custom Branding feature
                    foreach (ModuleInfo moduleInfo in moduleInfoCollection)
                    {
                        //get module URL
                        string moduleURL = moduleInfo.Url;
                        if (moduleURL != StringStore.strMasterPageURL)
                        {
                            foreach (ModuleFile fileInfo in moduleInfo.Files)
                            {
                                //get module URL
                                string fileURL = fileInfo.Url;
                                if (fileInfo.Properties.Count == 0)
                                {
                                    //get file in web
                                    SPFile file = curWeb.GetFile(curWeb.Url + "/" + moduleURL + "/" + fileURL);
                                    if (file.Exists)
                                    {
                                        //delete file
                                        file.Delete();
                                    }
                                    curWeb.Update();
                                }
                            }
                        }
                    }
                    // Provide Variable to keep the Hardcoded Value
                    string filename = StringStore.DefaultMasterPageFileName;
                    string TempURL = StringStore.TempURL;
                    //create full Master page URL
                    Uri masterUri = new Uri(curWeb.Url + TempURL + filename);
                    //Master page used by all forms and pages on the site that are not publishing pages
                    curWeb.MasterUrl = masterUri.AbsolutePath;
                    curWeb.CustomMasterUrl = masterUri.AbsolutePath;
                    curWeb.Update();
                    // Provide Variable to keep the Hardcoded Value
                    string ListName = StringStore.MasterPageLibName;
                    string MasterPageFileName = StringStore.NewMasterPageFileName;
                    string ColumnName = StringStore.MasterPageLibColumnName;
                    SPList list = curWeb.Lists[ListName];
                    foreach (SPListItem item in list.Items)
                    {
                        if (item[ColumnName].ToString().Trim() == MasterPageFileName)
                        {
                            curWeb.AllowUnsafeUpdates = true;
                            item.ModerationInformation.Status = SPModerationStatusType.Draft;
                            item.File.Delete();
                            curWeb.AllowUnsafeUpdates = false;
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                ULSLogger.LogErrorInULS("Error occured while deactivating the feature." + ex.Message, TraceSeverity.High);
            }
        }


        // Uncomment the method below to handle the event raised after a feature has been installed.

        //public override void FeatureInstalled(SPFeatureReceiverProperties properties)
        //{
        //}


        // Uncomment the method below to handle the event raised before a feature is uninstalled.

        //public override void FeatureUninstalling(SPFeatureReceiverProperties properties)
        //{
        //}

        // Uncomment the method below to handle the event raised when a feature is upgrading.

        //public override void FeatureUpgrading(SPFeatureReceiverProperties properties, string upgradeActionName, System.Collections.Generic.IDictionary<string, string> parameters)
        //{
        //}
    }
}
