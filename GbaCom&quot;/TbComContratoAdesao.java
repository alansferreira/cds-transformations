@Entity
@Table(name = "TB_COM_CONTRATO_ADESAO", schema = "&quot;GBA_COM&quot;")
public class TbComContratoAdesao{
	@Column(name = "IDENT")
    
	private Integer ident;

	@Column(name = "COD_CPF")
    
	private String codCpf;

	@Column(name = "TIPO_DOC")
    
	private String tipoDoc;

	@Column(name = "NUM_DOC")
    
	private String numDoc;

	@Column(name = "NOME_PESSOA")
    
	private String nomePessoa;

	@Column(name = "DESCR_EMAIL")
    
	private String descrEmail;

	@Column(name = "DATA_ADESAO")
    @Temporal(TemporalType.TIMESTAMP)
	private Date dataAdesao;

	@Column(name = "COD_RG_RNE")
    
	private String codRgRne;

	@Column(name = "FLAG_BRASILEIRO")
    
	private String flagBrasileiro;

	@Column(name = "FLAG_ATIVO")
    
	private String flagAtivo;

	@Column(name = "COD_IE")
    
	private String codIe;

	@Column(name = "COD_CCM")
    
	private String codCcm;

	@Column(name = "COD_CLIENTE")
    
	private String codCliente;

	@Column(name = "COD_CONTRATO")
    
	private String codContrato;

	@Column(name = "COD_PROPOSTA")
    
	private String codProposta;

	@Column(name = "PRACA_PAGAMENTO")
    
	private String pracaPagamento;

	@Column(name = "COD_CEP")
    
	private String codCep;

	@Column(name = "COD_UF")
    
	private String codUf;

	@Column(name = "ID_MUNICIPIO")
    
	private Integer idMunicipio;

	@Column(name = "BAIRRO")
    
	private String bairro;

	@Column(name = "LOGRADOURO")
    
	private String logradouro;

	@Column(name = "NUM_LOGRADOURO")
    
	private String numLogradouro;

	@Column(name = "COMPLEMENTO")
    
	private String complemento;

	@Column(name = "COD_DDD_FIXO")
    
	private String codDddFixo;

	@Column(name = "COD_TEL_FIXO")
    
	private String codTelFixo;

	@Column(name = "COD_DDD_MOVEL")
    
	private String codDddMovel;

	@Column(name = "COD_TEL_MOVEL")
    
	private String codTelMovel;

	@Column(name = "DATA_FIM_ADESAO")
    @Temporal(TemporalType.TIMESTAMP)
	private Date dataFimAdesao;

	@Column(name = "DATA_ATUALIZ")
    @Temporal(TemporalType.TIMESTAMP)
	private Date dataAtualiz;

	@Column(name = "ID_USUAR_CADAST")
    
	private Integer idUsuarCadast;

	@Column(name = "ID_USUAR_ATUALIZ")
    
	private Integer idUsuarAtualiz;

	@Column(name = "TIPO_EMPRESA")
    
	private Integer tipoEmpresa;

	@Column(name = "FLAG_BILHETAGEM")
    
	private String flagBilhetagem;

	@Column(name = "RAZAO_SOCIAL")
    
	private String razaoSocial;

	@Column(name = "ID_UNID_TRANSIT")
    
	private Integer idUnidTransit;

	@Column(name = "COD_CFC")
    
	private Integer codCfc;

	@Column(name = "FLAG_PPT")
    
	private String flagPpt;

}
