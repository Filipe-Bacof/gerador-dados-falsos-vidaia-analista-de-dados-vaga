"use client";

import { faker as fakerr } from "@/faker";
import faker from "@js-brasil/fakerbr/src/faker";

export default function Home() {
  const clientes: {
    codigo: number;
    nome: string;
    nome_res: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    cep: string;
    fone1: string;
    fone2: string;
    fax: string;
    celular: string;
    contato: string;
    cnpj_cpf: any;
    ind_ie: string;
    ins_est: string;
    reg_trb: string;
    nro_rg: any;
    tipo_doc: number;
    nro_doc: string;
    orgao_emi: string;
    uf_orgao: string;
    renda: number;
    nome_conj: string;
    dt_nasc_conj: string;
    profis_conj: number;
    data_emi: string;
    nome_pai: string;
    nome_mae: string;
    pes_conhec: string;
    fone_pes_conh: string;
    ocupacao: number;
    atividade: number;
    tipo_pes: string;
    tipo_cli: number;
    limite: number;
    saldo: number;
    perini: number;
    przvcto: number;
    qtmaxparc: number;
    desc_ven: number;
    desc_fat: number;
    observ: string;
    email: string;
    email_fin: string;
    email_nfe: string;
    site: string;
    cond_pg: number;
    dia_fat: number;
    g_etiq: string;
    e_civil: string;
    sexo: string;
    naturalid: string;
    bloq: string;
    data_nasc: Date;
    empresa: number;
    usu_inc: number;
    prazo_bl: number;
    convenio: string;
    situac_conv: string;
    c_lim_conv: string;
    cod_indica: number;
    prosp_tip_cobr: string;
    end_cobr: string;
    end_prof: string;
    ref_pes: string;
    ref_com: string;
    cargo: string;
    cobr_judic: string;
    banco: number;
    prosp_contr_lf: string;
    prosp_presc_v: string;
    prosp_ent_ven: string;
    prosp_desm_fat: string;
    prosp_end_util: string;
    prosp_desc_vp: string;
    prosp_repres: number;
    transp: number;
    prosp_exi_aut: string;
    prosp_bl_desc: string;
    prosp_desc_ven: number;
    repres: number;
    vendedor: number;
    regional: number;
    nivel: string;
    crf: Date;
    alvara: Date;
    meta: number;
    status: string;
    data_inc: Date;
    hora_inc: string;
    usu_alt: number;
    data_alt: Date;
    hora_alt: string;
    dt_ult_cp: Date;
    imp_prod_adc: string;
    sen_web_conv: string;
    usa_cart: string;
    exi_senha: string;
    acessa_fat: string;
    leiaut_fat: number;
    cred_rot: string;
    revenda: string;
    listapr: number;
    emite_doc: string;
    gera_mov: string;
    adm_cred: string;
    mod_frete: string;
    cartao: number;
    cartao2: string;
    emite_cart: string;
    alt_senha: string;
    id_seqbin: number;
    libera_oc: string;
    ent_ven: number;
    fidelidade: string;
    maior_desc: string;
    senha: string;
    lgpd: string;
    dta_lgpd: Date;
    usu_lgpd: number;
    aceites_lgpd: string;
    arred_vnd: string;
    tom_nfse: string;
    sld_pontos: number;
  }[] = [];
  const vendas: {
    empresa: number;
    numvenda: number;
    datae: Date;
    horae: string;
    atendente: number;
    cliente: number;
    st_caixa: string;
    itemv: number;
    cod_prod: number;
    cod_bar: string;
    nome_pro: string;
    grupo: number;
    nome_gru: string;
    sgrupo: number;
    nome_sgru: string;
    fabricante: number;
    nome_fab: string;
    classe: number;
    nome_cla: string;
    depto: number;
    nome_dep: string;
    dcb: number;
    nome_dcb: string;
    linha: number;
    nome_lin: string;
    fciapop: string;
    p_contr: string;
    antibio: string;
    qt_ven: number;
    qt_dev: number;
    vlr_ven: number;
    vlr_dev: number;
    vlr_desc: number;
    vlr_desc_sist: number;
    custo_med: number;
    custo_ult: number;
  }[] = [];

  function generateData() {
    for (let index = 0; index < 50; index++) {
      const clientId = fakerr.number.int({ min: 100000, max: 999999 });
      const numeroDeVendas = fakerr.number.int({ min: 2, max: 5 });
      const clientFirstName = fakerr.person.firstName();
      const clientLastName = fakerr.person.firstName();
      const clientName = `${clientFirstName} ${clientLastName}`;
      const clienteCPF = faker.cpf();
      const clienteRG = faker.rg();
      const responsavelFirstName = fakerr.person.firstName();
      const responsavelLastName = fakerr.person.firstName();
      const responsavelName = `${responsavelFirstName} ${responsavelLastName}`;
      const email = fakerr.internet.email({
        firstName: clientFirstName,
        lastName: clientLastName,
      });
      const phone1 = fakerr.phone.number();
      const phone2 = fakerr.phone.number();
      const nascimento = fakerr.date.past({ refDate: 1980, years: 30 });
      const enderecoRua = fakerr.location.street();
      const enderecoNumero = fakerr.location.buildingNumber();
      const enderecoCidade = fakerr.location.city();
      const enderecoBairro = fakerr.location.city();
      const enderecoEstado = fakerr.location.country();
      const enderecoCEP = fakerr.location.zipCode();

      const clienteobj = {
        codigo: clientId,
        nome: clientName,
        nome_res: responsavelName,
        endereco: enderecoRua,
        numero: enderecoNumero,
        complemento: "",
        bairro: enderecoBairro,
        cidade: enderecoCidade,
        cep: enderecoCEP,
        fone1: phone1,
        fone2: phone2,
        fax: "",
        celular: "",
        contato: "",
        cnpj_cpf: clienteCPF,
        ind_ie: "9",
        ins_est: "ISENTO",
        reg_trb: "1",
        nro_rg: clienteRG,
        tipo_doc: 0,
        nro_doc: "",
        orgao_emi: "SSP",
        uf_orgao: "RS",
        renda: 0.0,
        nome_conj: "",
        dt_nasc_conj: "0000-00-00",
        profis_conj: 0,
        data_emi: "0000-00-00",
        nome_pai: "",
        nome_mae: "",
        pes_conhec: "",
        fone_pes_conh: "",
        ocupacao: 0,
        atividade: 0,
        tipo_pes: "F",
        tipo_cli: 3,
        limite: 0.0,
        saldo: 0.0,
        perini: 0,
        przvcto: 0,
        qtmaxparc: 6,
        desc_ven: 0.0,
        desc_fat: 0.0,
        observ: "",
        email: email,
        email_fin: email,
        email_nfe: email,
        site: "",
        cond_pg: 0,
        dia_fat: 5,
        g_etiq: "N",
        e_civil: "0",
        sexo: "0",
        naturalid: "",
        bloq: "N",
        data_nasc: nascimento,
        empresa: 1,
        usu_inc: 0,
        prazo_bl: 30,
        convenio: "N",
        situac_conv: "A",
        c_lim_conv: "S",
        cod_indica: 0,
        prosp_tip_cobr: "N",
        end_cobr: "N",
        end_prof: "N",
        ref_pes: "N",
        ref_com: "N",
        cargo: "",
        cobr_judic: "N",
        banco: 0,
        prosp_contr_lf: "N",
        prosp_presc_v: "N",
        prosp_ent_ven: "N",
        prosp_desm_fat: "N",
        prosp_end_util: "N",
        prosp_desc_vp: "N",
        prosp_repres: 0,
        transp: 0,
        prosp_exi_aut: "N",
        prosp_bl_desc: "N",
        prosp_desc_ven: 0.0,
        repres: 0,
        vendedor: 0,
        regional: 0,
        nivel: "",
        crf: fakerr.date.past({ refDate: 2023, years: 20 }),
        alvara: fakerr.date.past({ refDate: 2023, years: 20 }),
        meta: 0.0,
        status: "A",
        data_inc: fakerr.date.past({ refDate: 2023, years: 20 }),
        hora_inc: "12:00:00",
        usu_alt: 0,
        data_alt: fakerr.date.past({ refDate: 2023, years: 20 }),
        hora_alt: "12:00:00",
        dt_ult_cp: fakerr.date.past({ refDate: 2023, years: 20 }),
        imp_prod_adc: "N",
        sen_web_conv: "",
        usa_cart: "N",
        exi_senha: "N",
        acessa_fat: "N",
        leiaut_fat: 0,
        cred_rot: "N",
        revenda: "N",
        listapr: 0,
        emite_doc: "CF",
        gera_mov: "N",
        adm_cred: "N",
        mod_frete: "9",
        cartao: fakerr.number.int({ min: 1000000000, max: 9999999999 }),
        cartao2: "",
        emite_cart: "N",
        alt_senha: "S",
        id_seqbin: 0,
        libera_oc: "N",
        ent_ven: 0.0,
        fidelidade: "S",
        maior_desc: "N",
        senha: "",
        lgpd: "N",
        dta_lgpd: fakerr.date.past({ refDate: 2023, years: 20 }),
        usu_lgpd: 0,
        aceites_lgpd: "NNNNNNNNNN",
        arred_vnd: "N",
        tom_nfse: "N",
        sld_pontos: 0.0,
      };

      clientes.push(clienteobj);

      for (let index = 0; index < numeroDeVendas; index++) {
        const horarioo = fakerr.number.int({ min: 0, max: 23 });
        const minutoo = fakerr.number.int({ min: 0, max: 59 });
        const segundoo = fakerr.number.int({ min: 0, max: 59 });
        const fullTime = `${horarioo}:${minutoo}:${segundoo}`;

        const vendasobj = {
          empresa: 1,
          numvenda: fakerr.number.int({ min: 1, max: 9999999999 }),
          datae: fakerr.date.past({ refDate: 2024, years: 3 }),
          horae: fullTime,
          atendente: fakerr.number.int({ min: 1, max: 15 }),
          cliente: clientId,
          st_caixa: "PA",
          itemv: 1,
          cod_prod: fakerr.number.int({ min: 1, max: 9999999999 }),
          cod_bar: `${fakerr.number.int({
            min: 1000000000000,
            max: 9999999999999,
          })}`,
          nome_pro: fakerr.commerce.productName(),
          grupo: 3,
          nome_gru: fakerr.commerce.productAdjective(),
          sgrupo: 1,
          nome_sgru: "GERAL",
          fabricante: 158,
          nome_fab: "NOVARTIS",
          classe: 6,
          nome_cla: fakerr.commerce.productAdjective(),
          depto: fakerr.number.int({ min: 1, max: 99 }),
          nome_dep: fakerr.commerce.department(),
          dcb: fakerr.number.int({ min: 1, max: 9999 }),
          nome_dcb: fakerr.commerce.department(),
          linha: fakerr.number.int({ min: 1, max: 99 }),
          nome_lin: fakerr.commerce.department(),
          fciapop: "N",
          p_contr: "N",
          antibio: "N",
          qt_ven: 1.0,
          qt_dev: 0.0,
          vlr_ven: fakerr.number.float({ min: 1, max: 299 }),
          vlr_dev: 0.0,
          vlr_desc: 0.0,
          vlr_desc_sist: 0.0,
          custo_med: 0.0,
          custo_ult: 0.0,
        };

        vendas.push(vendasobj);
      }
    }
    console.log(clientes);
    console.log(vendas);
  }

  return (
    <div>
      <button
        onClick={() => {
          generateData();
          // código totalmente sujo, mas serviu apenas para fazer alguns testes com a lib faker
        }}
      >
        Gerar Dados
      </button>
    </div>
  );
}
