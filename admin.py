from django.contrib import admin
from .models import Personne


class PersonneAdmin(admin.ModelAdmin):

    fieldsets = [
        [
            'Renseignement généraux',
            {
                "fields": [
                    ("nom", "prenoms", "sexe"),
                    "date_naissance",
                    "lieu_naissance",
                    "nationalite",
                    "num_nat"
                ],
            }
        ],
        [
            'Adresse',
            {
                "fields": [
                    "rue_et_num",
                    "code_postal",
                    "commune"
                ],
            }
        ],
        [
            "Carte d'identité",
            {
                "fields": [
                    "num_carte",
                    "debut_val",
                    "fin_val",
                    "commune_del"
                ],
                "classes": [
                    "collapse"
                ],
            }
        ],
        [
            'Photo',
            {
                "fields": [
                    "photo",
                ],
            }
        ],
    ]

    list_display = [
        'nom',
        'prenoms',
        'sexe',
        'date_naissance',
        'lieu_naissance',
        'nationalite',
        'code_postal',
        'commune',
        'card_is_valid'
    ]

    list_filter = ['sexe', 'code_postal', 'nationalite']
    search_fields = ['nom', 'prenoms']
    date_hierarchy = 'date_naissance'

admin.site.register(Personne, PersonneAdmin)
