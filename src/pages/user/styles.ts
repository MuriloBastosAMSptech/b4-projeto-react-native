import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: "flex-start",  // Move o conteúdo para o topo
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "#333",
    },
    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f0f0f0',
        elevation: 5,
        marginBottom: 20,  // Isso vai criar um espaço entre o botão e o texto abaixo
        marginTop: 40,     // Ajuste isso para mover o botão para mais para baixo
    },
    
    textBottom: {
        fontSize: 16,
        color: themas.Colors.gray,  // Defina a cor que você quiser
        marginTop: 20,  // Ajuste a distância entre o botão e o texto
        textAlign: 'center',  // Alinha o texto ao centro
    },
    
})