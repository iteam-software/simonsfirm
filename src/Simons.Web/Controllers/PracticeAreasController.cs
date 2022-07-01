using Microsoft.AspNetCore.Mvc;

namespace Simons.Web.Controllers
{
  [Route("practice-areas")]
  public class PracticeAreasController : Controller
  {
    public IActionResult Index()
    {
      return RedirectToAction(nameof(PracticeAreasController.Civil));
    }

    [Route("civil-litigation-appeals")]
    public IActionResult Civil()
    {
      return View();
    }

    [Route("real-estate-probate-litigation")]
    public IActionResult RealEstate()
    {
      return View();
    }

    [Route("real-estate-business-law")]
    public IActionResult Business()
    {
      return View();
    }

    [Route("employment-advice-defense")]
    public IActionResult Employment()
    {
      return View();
    }

    [Route("construction-law")]
    public IActionResult Construction()
    {
      return View();
    }

    [Route("dui-dwi-defense")]
    public IActionResult DUI()
    {
      return View();
    }

    [Route("title-insurance-defense")]
    public IActionResult TitleInsurance()
    {
      return View();
    }

    [Route("insurance-defense")]
    public IActionResult Insurance()
    {
      return View();
    }

    [Route("family-law")]
    public IActionResult Family()
    {
      return View();
    }
  }
}