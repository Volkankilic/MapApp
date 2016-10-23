using System.Web;
using System.Web.Optimization;

namespace MapApp
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/css/bootstrap.css",
                        "~/Content/css/main.css",
                        "~/Content/css/adaptive.css",
                        "~/Content/css/pushy.css",
                        "~/Content/css/font-awesome.css",
                        "~/Content/css/animate.css",
                        "~/Content/rs-plugin/css/settings.css"
                        ));


   
        }
    }
}