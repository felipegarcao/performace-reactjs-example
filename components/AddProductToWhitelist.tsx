export interface AddProductToWhitelistProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWhitelist({ onAddToWishList, onRequestClose }: AddProductToWhitelistProps) {
  return (
    <span>
      Deseja Adicionar Aos Favoritos ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}