# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

STORAGE RULES

members bucket:
- Path: members/{user_id}/{filename}
- Access: owner only
- Upload: authenticated users only

payments bucket:
- Path: payments/{user_id}/{filename}
- Upload: members
- Read: admins only

cms_uploads:
- Upload: admin only
- Read: admin only
