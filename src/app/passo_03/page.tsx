import { Passo03Form } from "@/components/pages/passo_03/passo_03_form"
import { Theme } from "@/components/Theme/page"


const Passo_03 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<Passo03Form />
		</Theme>
	)
}

export default Passo_03