using Microsoft.AspNetCore.Mvc;

namespace Simons.Web.Controllers
{
    [Route("attorneys")]
    public class AttorneysController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction(nameof(AttorneysController.Thomas));
        }

        [Route("thomas-a-simons-iv")]
        public IActionResult Thomas()
        {
            return View();
        }
        
        [Route("daniel-h-friedman")]
        public IActionResult Daniel()
        {
            return View();
        }

        [Route("frieda-simons-burnes")]
        public IActionResult Frieda()
        {
            return View();
        }
        
        [Route("quinn-scott-simons")]
        public IActionResult Quinn()
        {
            return View();
        }

        [Route("elege-simons-harwood")]
        public IActionResult Elege()
        {
            return View();
        }
    }
}