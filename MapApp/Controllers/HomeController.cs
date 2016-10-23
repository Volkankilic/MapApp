using MapApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MapApp.Controllers
{


    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            List<Sehir> SehirListesi = new List<Sehir>()
            {
                new Sehir()
                {
                    id=1,
                    name = "Adana",
                    latitude = "37.0000",
                    longitude = "35.3213"
                },
                new Sehir()
                {
                    id=2,
                    name = "İstanbul",
                    latitude = "41.0053",
                    longitude = "28.9770"
                },
                new Sehir()
                {
                    id=3,
                    name = "İzmir",
                    latitude = "38.4189",
                    longitude = "27.1287"
                }

            };

            ViewData["SehirListesi"] = SehirListesi;


            return View(ViewData["SehirListesi"]);
        }
      

        public ActionResult SehirlerJSON()
        {
            List<Sehir> SehirListesi = new List<Sehir>()
            {
                new Sehir()
                {
                    id=1,
                    name = "Adana",
                    latitude = "37.0000",
                    longitude = "35.3213"
                },
                new Sehir()
                {
                    id=2,
                    name = "Adıyaman",
                    latitude = "37.7648",
                    longitude = "38.2786"
                },
                new Sehir()
                {
                    id=3,
                    name = "Afyonkarahisar",
                    latitude = "38.7507",
                    longitude = "30.5567"
                }

            };


            return Json(SehirListesi, JsonRequestBehavior.AllowGet);
        }


    }
}
