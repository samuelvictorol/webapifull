using System;
namespace CRUDAPI.Models
{
    public class Pessoa
    {
        public int PessoaId { get; set; }
        public string Nome{ get; set; }
        public string SobrenNme{ get; set; }
        public int idade { get; set; }
        public string Profissao { get; set; }
    }
}