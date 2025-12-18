using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebAppPractiece.Data;
using WebAppPractiece.Models;
using WebAppPractiece.ViewModels;

namespace WebAppPractiece.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            IEnumerable<Slider> sliders = await _context.Sliders.Where(m => !m.IsDeleted).ToListAsync();

            SliderDetail sliderDetail = await _context.SlidersDetails.FirstOrDefaultAsync(m => !m.IsDeleted);
            IEnumerable<Product> products = await _context.Products
                .Include(p => p.ProductImages)
                .Include(p => p.Category)
                .Take(4)
                .ToListAsync();
            IEnumerable<Category> categories = await _context.Categories.Where(m => !m.IsDeleted).ToListAsync();

            HomeVM homeVM = new()
            {
                Sliders = sliders,
                SliderDetail = sliderDetail,
                Products = products,
                Categories = categories
            };

            ViewBag.ProductCount = await _context.Products.CountAsync(m => !m.IsDeleted);

            return View(homeVM);

        }


<<<<<<< HEAD
        public async Task<IActionResult> LoadMore(int skip) 
        {
 
            IEnumerable<Product> products = await _context.Products
                .Include(p => p.ProductImages)
                .Include(p => p.Category)
                .Where(m => !m.IsDeleted)
                .Skip(skip)
                .Take(4)  
=======
        public async Task<IActionResult> LoadMore(int skip)
        {
            var products = await _context.Products
                .Include(p => p.ProductImages)
                .Include(p => p.Category)
                .Where(p => !p.IsDeleted)
                .OrderBy(p => p.Id) 
                .Skip(skip)
                .Take(4)
>>>>>>> 740f8e9 (fix: correct product class mismatch to enable proper load more pagination)
                .ToListAsync();

            return PartialView("_ProductPartial", products);
        }
<<<<<<< HEAD
=======

>>>>>>> 740f8e9 (fix: correct product class mismatch to enable proper load more pagination)
    }
}
