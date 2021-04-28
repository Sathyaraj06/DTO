using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using DTO.Model;
using Microsoft.AspNetCore.Hosting;

namespace DTO.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DTOController : ControllerBase
    {

        private readonly ILogger<DTOController> _logger;
        private string Path;

        public DTOController(ILogger<DTOController> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            Path = env.ContentRootPath;
        }

        [HttpGet]
        public JsonResult GetData()
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true
            };

            var jsonString = System.IO.File.ReadAllText(Path +"\\DTO\\data.json");
            var jsonModel = JsonSerializer.Deserialize<DtoParentObject>(jsonString, options);
            return new JsonResult(jsonModel);
        }


        [HttpPost]
        public bool SetData(DtoParentObject obj)
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true
            };
            var jsonModel = JsonSerializer.Serialize(obj, options);
            System.IO.File.WriteAllText(Path + "\\DTO\\data.json", jsonModel);
            return true;
        }
    }
}
