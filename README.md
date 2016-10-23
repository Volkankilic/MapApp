## **MapApp** ##
MapApp ile Türkiye'deki illerin enlem ve boylam bilgilerinden faydalanarak haritada gösterebilir ve işaretleme yapabilirsiniz

![enter image description here](https://i.hizliresim.com/9Gj318.png)


----------


**Kullanılan Teknolojiler**

 - [Asp.Net/MVC 4](https://www.asp.net/whitepapers/mvc4-release-notes)
 - [Bootstrap 3](http://getbootstrap.com/)
 - [JavaScript](https://www.javascript.com/)
 - [Google Maps API](https://developers.google.com/maps/)

**Kullanımı**
---------
**Şehir Ekleme**

    Controllers / HomeController / Index

     List<Sehir> SehirListesi = new List<Sehir>
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
                        id=6,
                        name = "Ankara",
                        latitude = "39.9208",
                        longitude = "32.8541"
                    },
                ...
                ...
      }              
new Sehir() ile dünya üzerindeki herhangi bir şehrin enlem ve boylamını tanımlayarak ***Sehir*** listesine ekleyebilirsiniz


----------


***Şehirlerin Listelenmesi***

    Views / Home / Index.cshtml

     foreach (var item in SehirListesi as IEnumerable<MapApp.Models.Sehir>)
     {
         <li><a href="@Url.Action("Index", "Home", new { lat =   item.latitude, lng = item.longitude })">@item.name</a></li>
     }

name, latitude ve longitude değerleri ***Models/SehirlerLatLng.cs***'ten alır.


----------


*Eklediğiniz şehre iğne eklemek isterseniz ;*

    Scripts / user-js / map_index.js 

    markersData = {
        'Shop': [
        {
            name: 'Ad',
            location_latitude: 41.033102,
            location_longitude: 29.102905,
            map_image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
            name_point: 'Ad Soyad',
            description_point: 'Konum',
            url_point: 'url'
        }


----------


