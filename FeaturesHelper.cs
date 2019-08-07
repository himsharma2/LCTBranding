using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Xml.Linq;
using System.Linq;
using System.Text;
using System.Globalization;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Administration;

namespace Gilead.SP.LCT.Branding
{
    public static class FeaturesHelper
    {
        public static List<ModuleInfo> GetModuleFilesInfo(SPFeatureReceiverProperties instance)
        {
            List<ModuleInfo> modules =
                    (from SPElementDefinition element in instance.Feature.Definition.GetElementDefinitions(CultureInfo.CurrentCulture)
                     where element.ElementType == "Module"
                     let xmlns = XNamespace.Get(element.XmlDefinition.NamespaceURI)
                     let module = XElement.Parse(element.XmlDefinition.OuterXml)
                     select new ModuleInfo
                     {
                         Url = module.Attribute("Url").Value,
                         Path = Path.Combine(element.FeatureDefinition.RootDirectory, module.Attribute("Url").Value),
                         Files = (from file in module.Elements(xmlns.GetName("File"))
                                  select new ModuleFile
                                  {
                                      Url = file.Attribute("Url").Value,
                                      Properties = (from property in file.Elements(xmlns.GetName("Property"))
                                                    select property).ToDictionary(
                                                          n => n.Attribute("Name").Value,
                                                          v => v.Attribute("Value").Value)
                                  }).ToList()
                     }).ToList();
 
            return modules;
        }
    }
    public class ModuleFile
    {
        public string Url { set; get; }
        public Dictionary<string, string> Properties { set; get; }
    }
    public class ModuleInfo
    {
        public string Url { set; get; }
        public string Path { set; get; }
        public List<ModuleFile> Files { set; get; }
    }
}

