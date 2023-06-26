import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
    
      <ProductDetails>
        <h1>Camiseta X</h1>

        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus exercitationem quidem aperiam quibusdam numquam fuga nulla temporibus, at ex? Voluptatibus corporis ex eum nemo dolorem quaerat quam rerum esse!</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}