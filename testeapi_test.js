import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Laís', 'Davi', 'Bruno Aparecido Cano']
let numeros = [11, 24, 69]

Deno.test("teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

Deno.test("Testando números", ()=> {
    assertArrayIncludes(numeros, [24])
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado");
})