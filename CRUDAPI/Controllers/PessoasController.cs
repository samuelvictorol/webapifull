using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDAPI.Data;

namespace CRUDAPI.Controllers
{
    //aqui definimos que é uma api ena linha abaixo definimos o padrão de rota
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController: ControllerBase
    {
        //criar o contexto  inserir o using CRUDAPI.Models
    private readonly Contexto _contexto;
    
        //construtor do controller - inicializar via injeção de dependência
        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        //metodos

        //pegar todos
        [HttpGet]
        //o ActionResult vai ter como resultado uma lista de Pessoa
        public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync(){
            return await _contexto.Pessoas.ToListAsync();

        }

        //pegar pessoa pelo Id
        [HttpGet("{pessoaId}")]
        public async Task<ActionResult<Pessoa>> PegarPessoaPeloIdAsync(int pessoaId){
            Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaId);

            //caso não exista
            if(pessoa== null){
                return NotFound();
                } else{
                    return pessoa;
                }
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> SalvarPessoaAsync(Pessoa pessoa){
            await _contexto.Pessoas.AddAsync(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarPessoaAsync(Pessoa pessoa){
            _contexto.Pessoas.Update(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{pessoaId}")]
        public async Task<ActionResult> ExcluirPessoaAsync(int pessoaId){
            Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaId);
            _contexto.Remove(pessoa);

            await _contexto.SaveChangesAsync();
            return Ok();
        }
    }
}
