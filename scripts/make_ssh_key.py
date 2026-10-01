#!/usr/bin/env python3
"""Generate an ed25519 SSH keypair (OpenSSH format) without the ssh-keygen binary.

Used in sandboxed environments where openssh-client is not installed.
Equivalent to: ssh-keygen -t ed25519 -C <comment> -f ~/.ssh/id_ed25519 -N ""
"""

import os
import stat
import sys
from pathlib import Path

from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives.serialization import (
    Encoding,
    NoEncryption,
    PrivateFormat,
    PublicFormat,
)

COMMENT = "admin@thewelltrading.co.za"


def main() -> None:
    ssh_dir = Path.home() / ".ssh"
    key_file = ssh_dir / "id_ed25519"
    pub_file = ssh_dir / "id_ed25519.pub"

    if key_file.exists():
        print(f"SSH key already exists: {key_file}")
    else:
        key = Ed25519PrivateKey.generate()
        private_pem = key.private_bytes(
            encoding=Encoding.PEM,
            format=PrivateFormat.OpenSSH,
            encryption_algorithm=NoEncryption(),
        )
        public_openssh = key.public_key().public_bytes(
            encoding=Encoding.OpenSSH,
            format=PublicFormat.OpenSSH,
        )

        ssh_dir.mkdir(mode=0o700, parents=True, exist_ok=True)
        key_file.write_bytes(private_pem)
        pub_file.write_bytes(public_openssh + b" " + COMMENT.encode() + b"\n")
        print(f"Generated ed25519 keypair: {key_file}")

    # Harden permissions (paramiko requires the private key not be world-readable)
    os.chmod(ssh_dir, stat.S_IRWXU)
    os.chmod(key_file, 0o600)
    os.chmod(pub_file, 0o644)

    print("\n=== PUBLIC KEY (add at https://github.com/settings/ssh/new) ===")
    print(pub_file.read_text().strip())
    print("=== END PUBLIC KEY ===")


if __name__ == "__main__":
    sys.exit(main())
