
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gilead.SP.LCT.Branding
{
    class StringStore
    {
        

        #region Masterpage and Page Layout
        public const string MasterPageLibName = "Master Page Gallery";
        public const string NewMasterPageFileName = "LCTMasterpage.master";
        public const string DefaultMasterPageFileName = "nightandday.master";
        public const string MasterPageLibColumnName = "Name";
        public const string TempURL = "/_catalogs/masterpage/";
        #endregion

        #region ULS Logs
        public static string vsDiagnosticAreaName = "LCT Logging Service";
        public static string CategoryName = "LCT System";
        #endregion

        #region:Feature Deactivation
        public const string strMasterPageURL = "_catalogs/masterpage";
        #endregion
    }
}
