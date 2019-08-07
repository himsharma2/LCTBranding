using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Administration;
using System.Runtime.InteropServices;
using Gilead.SP.LCT.Branding;

namespace Gilead.SP.LCT
{
    class ULSLogger : SPDiagnosticsServiceBase
    {

        //test 
        public static uint uintEventID = 700; // Event ID
        private static ULSLogger _Current;
        public static ULSLogger Current
        {
            get
            {
                if (_Current == null)
                {
                    _Current = new ULSLogger();
                }
                return _Current;
            }
        }

        private ULSLogger()
            : base("LCT Logging Service", SPFarm.Local)
        { }

        protected override IEnumerable<SPDiagnosticsArea> ProvideAreas()
        {
            List<SPDiagnosticsArea> areas = new List<SPDiagnosticsArea>
            {
                  new SPDiagnosticsArea(StringStore.vsDiagnosticAreaName, new List<SPDiagnosticsCategory>
                   {
                    new SPDiagnosticsCategory(StringStore.CategoryName, TraceSeverity.Medium, EventSeverity.Error)
                   })
             };
            return areas;
        }
        public static void LogErrorInULS(string errorMessage)
        {
            SPDiagnosticsCategory category = ULSLogger.Current.Areas[StringStore.vsDiagnosticAreaName].Categories[StringStore.CategoryName];
                ULSLogger.Current.WriteTrace(uintEventID, category, TraceSeverity.Unexpected, errorMessage);
        }
        public static void LogErrorInULS(string errorMessage, TraceSeverity tsSeverity)
        {
            SPDiagnosticsCategory category = ULSLogger.Current.Areas[StringStore.vsDiagnosticAreaName].Categories[StringStore.CategoryName];
                ULSLogger.Current.WriteTrace(uintEventID, category, tsSeverity, errorMessage);
        }
    }
}