import {
  assertStrictEquals,
  assertExists,
  assertNotEquals,
  assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let nome1 = "gabi"
let vazio

Deno.test("Teste 1 assertStrictEquals:", () => {
    assertStrictEquals(nome1, "Gabi");
});

Deno.test("Teste 2 assertStrictEquals:", () => {
    assertStrictEquals(nome1, "gabi");
});

Deno.test("Teste 1 assertExists:", () => {
    assertExists(vazio)
})

Deno.test("Teste 2 assertExists:", () => {
  assertExists(nome1)
})

Deno.test("Teste 1 assertNotEquals", () => {
  assertNotEquals(nome1, "gabi");
});

Deno.test("Teste 2 assertNotEquals", () => {
  assertNotEquals("André Maia", "bom professor");
});

Deno.test("Teste 1 assertArrayIncludes", () => {
  assertArrayIncludes([1, 2, 3], [3, 4]);
});

Deno.test("Teste 2 assertArrayIncludes", () => {
  assertArrayIncludes([1, 2, 3], [1, 2]);
});