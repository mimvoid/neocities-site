{
  description = "Provides tools for developing my neocities site";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
  let
    pkgs = import nixpkgs { system = "x86_64-linux"; };
  in
  {
    devShells."x86_64-linux".default = pkgs.mkShell {
      name = "neocities";

      packages = with pkgs; [
        neocities-cli
        hugo
        prettier-plugin-go-template
      ];
    };
  };
}
