using Microsoft.AspNetCore.Mvc;

namespace Simons.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        [Route("staff")]
        public IActionResult Staff()
        {
            return View();
        }

        [Route("contact")]
        public IActionResult Contact()
        {
            return View();
        }
        
        [Route("disclaimer")]
        public IActionResult Disclaimer()
        {
            return View();
        }

        [Route("error")]
        public IActionResult Error()
        {
            return RedirectToAction(nameof(HomeController.Index));
        }
    }
}
